// type ={}
export const getData = async <T>(url: string): Promise<T> => {
    const resoponse = await fetch(url);
    return await resoponse.json()
}