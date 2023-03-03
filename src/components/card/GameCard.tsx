import { FC, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import {
  Alert,
  Button,
  Card,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";

import { IGame } from "../../types/game";

interface GameCardProps {
  isAuth: boolean;
  game: IGame;
  addToCartHandler: (game: IGame) => void;
}

export const GameCard: FC<GameCardProps> = ({
  isAuth,
  game,
  addToCartHandler,
}) => {
  const [errorForm, setErrorForm] = useState(false);
  const { itemsInCart } = useAppSelector((state) => state.cart);
  const {
    name,
    image,
    description,
    ageLimit,
    genre,
    rating,
    price,
    platform,
    id,
  } = game;
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
          <Typography
            variant="body2"
            color="text.secondary"
            className="h-28 overflow-hidden"
          >
            {description}
          </Typography>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <Typography>{genre}</Typography>
              <Typography className="bg-yellow-500 rounded-md p-1 w-10 text-center">
                {ageLimit}+
              </Typography>
            </div>
            <div className="flex gap-3">
              {platform.pc && <Typography>PC</Typography>}
              {platform.playstation && <Typography>Playstation</Typography>}
              {platform.xbox && <Typography>Xbox</Typography>}
            </div>
            <Typography className="font-bold mb-1">Rating: {rating}</Typography>
          </div>
          <div className="flex justify-between items-center">
            <Button
              onClick={() => {
                if (!isAuth) {
                  setErrorForm(true);
                } else addToCartHandler(game);
              }}
              disabled={itemsInCart.some((game) => game.id === id)}
              variant="contained"
            >
              Add to cart
            </Button>
            <Snackbar
              open={errorForm}
              autoHideDuration={3500}
              onClose={() => setErrorForm(false)}
            >
              <Alert severity="error" sx={{ width: "310px" }}>
                To add an item to your cart, you need to login
              </Alert>
            </Snackbar>
            <Typography className="font-bold">{price} $</Typography>
          </div>
        </div>
      </Card>
    </>
  );
};
