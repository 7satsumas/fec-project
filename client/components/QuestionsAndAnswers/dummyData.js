
// questions
const questions = {
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]
}


// answers
// {
//   "question": "1",
//   "page": 0,
//   "count": 5,
//   "results": [
//     {
//       "answer_id": 8,
//       "body": "What a great question!",
//       "date": "2018-01-04T00:00:00.000Z",
//       "answerer_name": "metslover",
//       "helpfulness": 8,
//       "photos": [],
//     },
//     {
//       "answer_id": 5,
//       "body": "Something pretty durable but I can't be sure",
//       "date": "2018-01-04T00:00:00.000Z",
//       "answerer_name": "metslover",
//       "helpfulness": 5,
//       "photos": [{
//           "id": 1,
//           "url": "urlplaceholder/answer_5_photo_number_1.jpg"
//         },
//         {
//           "id": 2,
//           "url": "urlplaceholder/answer_5_photo_number_2.jpg"
//         },
//         // ...
//       ]
//     },
//     // ...
//   ]
// }

// const questions = {
//   "product_id": "61575",
//   "results": [
//       {
//           "question_id": 533212,
//           "question_body": "Does this product run big or small?",
//           "question_date": "2019-01-17T00:00:00.000Z",
//           "asker_name": "jbilas",
//           "question_helpfulness": 8,
//           "reported": false,
//           "answers": {}
//       },
//       {
//           "question_id": 533214,
//           "question_body": "Can I wash it?",
//           "question_date": "2018-02-08T00:00:00.000Z",
//           "asker_name": "cleopatra",
//           "question_helpfulness": 7,
//           "reported": false,
//           "answers": {
//               "4996619": {
//                   "id": 4996619,
//                   "body": "I've thrown it in the wash and it seems fine",
//                   "date": "2018-02-08T00:00:00.000Z",
//                   "answerer_name": "marcanthony",
//                   "helpfulness": 8,
//                   "photos": []
//               },
//               "4996637": {
//                   "id": 4996637,
//                   "body": "It says not to",
//                   "date": "2018-03-08T00:00:00.000Z",
//                   "answerer_name": "ceasar",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "4996669": {
//                   "id": 4996669,
//                   "body": "I wouldn't machine wash it",
//                   "date": "2018-03-08T00:00:00.000Z",
//                   "answerer_name": "ceasar",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "4996674": {
//                   "id": 4996674,
//                   "body": "Only if you want to ruin it!",
//                   "date": "2018-03-08T00:00:00.000Z",
//                   "answerer_name": "ceasar",
//                   "helpfulness": 5,
//                   "photos": []
//               },
//               "4996680": {
//                   "id": 4996680,
//                   "body": "Yes",
//                   "date": "2018-03-08T00:00:00.000Z",
//                   "answerer_name": "Seller",
//                   "helpfulness": 4,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 533213,
//           "question_body": "How long does it last?",
//           "question_date": "2019-07-06T00:00:00.000Z",
//           "asker_name": "funnygirl",
//           "question_helpfulness": 6,
//           "reported": false,
//           "answers": {
//               "4996638": {
//                   "id": 4996638,
//                   "body": "It runs small",
//                   "date": "2019-11-17T00:00:00.000Z",
//                   "answerer_name": "dschulman",
//                   "helpfulness": 1,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
//                       "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
//                   ]
//               },
//               "4996662": {
//                   "id": 4996662,
//                   "body": "Showing no wear after a few months!",
//                   "date": "2019-09-06T00:00:00.000Z",
//                   "answerer_name": "sillyguy",
//                   "helpfulness": 8,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 533210,
//           "question_body": "What fabric is the top made of?",
//           "question_date": "2018-01-04T00:00:00.000Z",
//           "asker_name": "yankeelover",
//           "question_helpfulness": 1,
//           "reported": false,
//           "answers": {
//               "4996578": {
//                   "id": 4996578,
//                   "body": "Something pretty soft but I can't be sure",
//                   "date": "2018-01-04T00:00:00.000Z",
//                   "answerer_name": "metslover",
//                   "helpfulness": 5,
//                   "photos": [
//                       "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
//                       "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
//                       "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
//                   ]
//               },
//               "4996580": {
//                   "id": 4996580,
//                   "body": "Its the best! Seriously magic fabric",
//                   "date": "2018-01-04T00:00:00.000Z",
//                   "answerer_name": "metslover",
//                   "helpfulness": 7,
//                   "photos": []
//               },
//               "4996581": {
//                   "id": 4996581,
//                   "body": "DONT BUY IT! It's bad for the environment",
//                   "date": "2018-01-04T00:00:00.000Z",
//                   "answerer_name": "metslover",
//                   "helpfulness": 8,
//                   "photos": []
//               },
//               "4996630": {
//                   "id": 4996630,
//                   "body": "Suede",
//                   "date": "2018-11-04T00:00:00.000Z",
//                   "answerer_name": "metslover",
//                   "helpfulness": 7,
//                   "photos": []
//               },
//               "4996668": {
//                   "id": 4996668,
//                   "body": "Supposedly suede, but I think its synthetic",
//                   "date": "2018-12-04T00:00:00.000Z",
//                   "answerer_name": "metslover",
//                   "helpfulness": 3,
//                   "photos": []
//               }
//           }
//       }
//   ]
// }

module.exports = {
  questions
}