import request, { gql } from "graphql-request";

export const getFuelList = async () => {
  const query = gql`
    query Assets {
      assets {
        createdAt
        id
        publishedAt
        fileName
        url
        updatedAt
      }
      fuelLists {
        name
        price
        fuelAvg
        id
        updatedAt
        publishedAt
        createdAt
        image {
          url
        }
      }
    }
  `;

  const result = await request('https://api-ap-southeast-2.hygraph.com/v2/clrx5anby108901utmz0ardzj/master', query);
  return result;
};

export const getShedLocations = async () => {
  const query = gql`
    query MyQuery {
      shedLocations {
        adress
      }
    }
  `;

  const result = await request('https://api-ap-southeast-2.hygraph.com/v2/clrx5anby108901utmz0ardzj/master', query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createBooking
    (data: {bookTime: "`+formValue.bookTime+`",
      bookDate: "`+formValue.bookDate+`",
      contactNumber: "`+formValue.contactNumber+`"}) 
    }

  `
  ;

  const result = await request('https://api-ap-southeast-2.hygraph.com/v2/clrx5anby108901utmz0ardzj/master', mutationQuery);
  return result;

};
