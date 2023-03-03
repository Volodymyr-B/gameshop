import { FC } from "react";

import { Button, Card, CardMedia, Typography } from "@mui/material";
import { IGame } from "../../types/game";

interface CartItemProps {
  game: IGame;
  removeFromCart: (id: number) => void;
}
export const CartItem: FC<CartItemProps> = ({ game, removeFromCart }) => {
  const { price, image, name, id } = game;

  return (
    <>
      <Card elevation={4} className="w-80 flex flex-col">
        <CardMedia
          className="h-[415px] w-80 object-cover"
          component="img"
          image={image}
          alt={name}
        ></CardMedia>
        <div className="p-2">
          <Typography variant="h5" className="h-16 font-bold text-center">
            {name}
          </Typography>
          <div className="flex flex-col gap-1"></div>
          <div className="flex justify-between items-center">
            <Button onClick={() => removeFromCart(id)} variant="contained">
              Remove
            </Button>
            <Typography className="font-bold">{price} $</Typography>
          </div>
        </div>
      </Card>
    </>
  );
};
