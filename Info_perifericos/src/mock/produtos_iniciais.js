import { v4 as uuidv4 } from "uuid"

export function getProdutos () {
    return new Promise((resolve, reject) => {
        resolve(
              [
                
                {
                id: uuidv4(),
                nome:'Teclado Branco',
                fabricante:'T-data',
                preco: 290.90,
                imagem: 'teclado branco.jpg',
                descricao: 'Ótimo teclado para uso profissional e domestico',
                tipo: 'teclados'
                },

                {
                  id: uuidv4(),
                  nome:'HeadSet HX',
                  fabricante:'HX',
                  preco: 499.98,
                  imagem: 'Headset HX.jpg',
                  descricao: 'Melhor desempenho e design da fabricante HX',
                  tipo: 'Headset'
                },

                {
                  id: uuidv4(),
                  nome:'Fone blueBlu ',
                  fabricante:'BB',
                  preco: 299.98,
                  imagem: 'Headset azul.jpg',
                  descricao: 'Escute suas melhores musicas com a melhor qualidade que o mercado tem a oferecer.',
                  tipo: 'Headset'
                },

                {
                  id: uuidv4(),
                  nome:'Headset UberRed ',
                  fabricante:'URDfoones',
                  preco: 699.98,
                  imagem: 'Headset 01.jpg',
                  descricao: 'Com desempenho melhorado para jogos transforme o jeito que você escuta seus melhores jogos, com o novo fone UberRed.',
                  tipo: 'Headset'
                },

                {
                  id: uuidv4(),
                  nome:'Mouse',
                  fabricante:'T-data',
                  preco: 69.90,
                  imagem: 'mouse preto.jpg',
                  descricao: 'Mouse perfeito para o uso diario',
                  tipo: 'Mouse'
                },

                {
                  id: uuidv4(),
                  nome:'Teclado Gamer',
                  fabricante:'GamerXst',
                  preco: 390.90,
                  imagem: 'teclado gamer.jpg',
                  descricao: 'Turbine sua jogatina com o Teclado gamer, jogue do seu jeito e da melhor forma possivel',
                  tipo: 'teclados'
                },
                
                {
                  id: uuidv4(),
                  nome:'Mouse de Precisão',
                  fabricante:'W',
                  preco: 159.99,
                  imagem: 'mouse w.jpg',
                  descricao: 'Ótima precisão e acabamento, perfeito para quem curte novas tecnologias',
                  tipo: 'Mouse'
                },

                {
                  id: uuidv4(),
                  nome:'Mouse logitech',
                  fabricante:'Logitech',
                  preco: 89.99,
                  imagem: 'mouse logitech.jpg',
                  descricao: 'Mouse para quem busca um ótimo desempenho e mais facilidade e conforto durante o dia-a-dia',
                  tipo: 'Mouse'
                }
            
              ]
        )    
    })
}
