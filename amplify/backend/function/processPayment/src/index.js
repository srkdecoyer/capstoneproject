const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-south-1_9KvtspJqz";
const stripe = require("stripe")("sk_test_51HkZSOEDJ2SVojoIBX4s4qL9H4TJ2OLJuirxNOfSjFUNUp4HcTJcPvnCWoo2B2OPHQ6AmdeCgi54p22BYcjiSxMf00ECrmDgls");

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username
  };
  const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, address, token } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    // customer=stripe.Customer.create(
    //   email=request.POST["email"],
    //   name=request.POST["nickname"],
    //   source=request.POST["stripeToken"],
    //   )
    //   customer=stripe.Customer.modify(
    //       customer.id,
    //       address={"city":"mumbai","country":"india","line1":"unr","line2":"thane","postal_code":"421005","state":"maharashtra"},
    //   )
    //   charge=stripe.Charge.create(
    //   customer=customer,
    //   amount=500,
    //   currency='inr',
    //   description="payment"
    //   )
    const charge = await stripe.charges.create({
      amount: total * 100,
      currency: 'inr',
      source: 'tok_visa',
      description: 'Payment recorded.',
      });

    // await stripe.charges.create({
    //   amount: total * 100,
    //   currency: 'inr',
    //   //source: token, //Error:   "Error: Your card was declined. This transaction requires authentication."
    //   source: 'tok_in',
    //   description: `Order ${new Date()} by ${email}`
    // });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
