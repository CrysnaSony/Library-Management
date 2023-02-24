import bookController from "../controllers/bookController";

test('get list of books', () => {
    return bookController.list()
              .then((data)=>{
                  expect(data).toHaveProperty(['title'])
              })
  });