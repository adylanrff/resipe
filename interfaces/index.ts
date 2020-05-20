// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type Recipe = {
  id: number
  title: string
  yield: string
  totalTime: number
  ingredients: Array<string>
  instructions: Array<string>
  imageURL: string
}
