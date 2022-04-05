import { Data } from '@types'

const words = 'ipsum dolor sit amet consectetur adipiscing elit. Nulla volutpat justo vel euismod viverra. Mauris volutpat lacinia orci. Nulla mi nisi pulvinar vitae metus eget auctor varius odio. Phasellus et ornare ante. Morbi consequat urna urna id consectetur dui blandit vitae. Nunc tristique magna malesuada risus suscipit sagittis. Ut ut porttitor dolor ut lobortis nisl. Maecenas semper purus massa a porttitor massa pharetra quis. Aenean venenatis mi ac tellus ultrices quis interdum felis tincidunt. Phasellus dapibus blandit mi ut euismod. Nullam consequat lacus a erat vulputate ultrices. In a mattis massa vitae mattis orci'

const wordsArray = words.split(' ')
const wordsArrLen = wordsArray.length

let index = 0

function getRandomString (arr:string[], len:number): string {
  const randomIndex = Math.floor(Math.random() * len)
  return arr[randomIndex]
}

function generateRandomData (quantity: number): Data[] {
  const data: Data[] = []

  for (let i = 0; i < Math.floor(Math.random() * quantity + 1); i++) {
    const idAndName = getRandomString(wordsArray, wordsArrLen)
    data.push({
      id: (++index).toString(),
      name: idAndName
    })
  }

  return data
}

export function makeTree (): Data {
  const root:Data = {
    id: '0',
    name: 'Lorem',
    children: []
  }

  for (let i = 0; i < 100; i++) {
    const idAndName = getRandomString(wordsArray, wordsArrLen)
    const node: Data = {
      id: (++index).toString(),
      name: idAndName,
      children: [...generateRandomData(10)]
    }

    for (let j = 0; j < node.children?.length!; j++) {
      const childNode = node.children?.[j]

      // @ts-ignore
      node.children[j] = ({
        ...childNode,
        children: [...generateRandomData(5)]
      })
    }

    root.children!.push(node)
  }

  return root
}
