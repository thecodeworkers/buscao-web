import { GraphQlClient, normalized } from '../../utils';

export const categories = async () => {
  const query = `
    query MyQuery {
      categories {
        nodes {
          name
          slug
        }
      }
    }
  `
  const data: any = await GraphQlClient(query)
  return normalized(data?.categories?.nodes)
}

export const AllPosts = async () => {
  const query = `query MyQuery {
    posts {
      nodes {
        content(format: RENDERED)
        title
        id
        categories {
          nodes {
            name
          }
        }
        comercio {
          destacado
          metodosDePago
          pais
          sitioWeb
          sucursales {
            deliveryPickup
            direccion
            estado
            horario {
              domingo {
                abierto
                apertura
                cierre
              }
              jueves {
                abierto
                apertura
                cierre
              }
              lunes {
                abierto
                apertura
                cierre
              }
              martes {
                abierto
                cierre
                apertura
              }
              miercoles {
                apertura
                abierto
                cierre
              }
              sabado {
                abierto
                apertura
                cierre
              }
              viernes {
                abierto
                apertura
                cierre
              }
            }
            mapa {
              longitude
              latitude
              streetAddress
            }
            nombre
          }
          tiposDePago
        }
      }
    }
  }    
  `
  const data: any = await GraphQlClient(query)
  return normalized(data?.posts?.nodes)
}