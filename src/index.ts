import axios, { AxiosResponse } from 'axios';

export class GetUserGuild {

    public data : Data


    get(bearertoken : string): Promise<Array<Data>> {
        return new Promise(async (resolve) => {

       axios.get('https://discord.com/api/users/@me/guilds', {
            headers: {
                Authorization: `Bearer ${bearertoken}`
            }
          })
          .then((data: any) => {

            resolve(data.data);

          })
          .catch((err : string) => {
            throw new Error(err)
          })
        })
    }
}

type Data = {
    id: string
    name: string
    icon: string
    owner: boolean
    permissions: number
    features: ArrayHikisuu
    permissions_new: string
}

type ArrayHikisuu = []

