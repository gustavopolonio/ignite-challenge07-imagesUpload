import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO SELECTED IMAGE URL STATE
  const [selectedImgUrl, setSelectedImgUrl] = useState('')

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string) {
    onOpen()
    setSelectedImgUrl(url)
  }

  return (
    <SimpleGrid columns={3} spacing='40px'>

      { cards.map(card => (
        <Card data={card} viewImage={() => handleViewImage(card.url)} key={card.id} />
      )) }
      
      <ModalViewImage
        isOpen={isOpen} 
        onClose={() => onClose()}
        imgUrl={selectedImgUrl}
      />

    </SimpleGrid>
  );
}
