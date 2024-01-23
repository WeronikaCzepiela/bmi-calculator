export enum TypesOfText {
  H2 = 'h2',
  L = 'l',
  E = 'e',
  T = 't',
}

export type TextType = {
  type: TypesOfText
  children: string
}
