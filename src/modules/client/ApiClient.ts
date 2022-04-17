import { Product, User } from './types'

export default class ApiClient {
  constructor (
    private baseUrl: string
  ) { }

  public async login(username: string, password: string): Promise<User> {
    // API didn't work with users (just server error)
    // And here I study FE, why I need real mock server?))
    if (username === 'user' && password === '1111') {
      return {
        username: 'user',
        email: 'user@mail.com',
      }
    } else {
      throw new Error(`There is no user ${username} registered`);
    }
  }

  public async getProducts (limit = 10): Promise<Product[]> {
    const result = await fetch(`${this.baseUrl}/products?limit=${limit}`)

    return result.json()
  }
}
