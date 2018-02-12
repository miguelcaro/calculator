import { post } from "../utils/requests";


const requestGetSavings = data => {
  return post("/savings", {}, {
        data: {
            type: "savings",
            attributes: {
                current_balance: data.current,
                minimum_payment: data.minimum,
                annual_interest_rate: data.interest
            }
        }
    })
    .catch(error => {
      console.log(error);
    });;
}
export { requestGetSavings };
