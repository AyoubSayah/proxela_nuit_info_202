// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface IRoute {
  path: string
  component?: React.FunctionComponent<any>
  name: string
  element?: React.ReactElement
  children?: IRoute[]
  exact?: boolean
}
