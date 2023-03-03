import { ChangeEvent, useState } from "react";
import { GameCard } from "../../components/card/GameCard";
import { selectValues } from "../../constants/select-values";
import { addToCart } from "../../store/slices/cart-slice";
import { useAppDispatch } from "../../hooks/redux";
import { useAuth } from "../../hooks/use-auth";
import { data } from "../../mock/data";

import { MenuItem, TextField } from "@mui/material";
import { IGame } from "../../types/game";

export const MainPage = () => {
  const [games, setGames] = useState<IGame[]>(data);
  const [sort, setSort] = useState("");
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const sortGamesHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    const selectValue = e.target.value;
    if (selectValue === "rating") {
      setGames(games.sort((a, b) => b.rating - a.rating));
    }
    if (selectValue === "lesserPrice") {
      setGames(games.sort((a, b) => a.price - b.price));
    }
    if (selectValue === "biggerPrice") {
      setGames(games.sort((a, b) => b.price - a.price));
    }
  };

  const addToCartHandler = (game: IGame) => {
    dispatch(addToCart(game));
  };

  return (
    <>
      <TextField
        className="w-56 my-6"
        select
        value={sort}
        label="Sort games"
        onChange={sortGamesHandler}
      >
        {selectValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div className="flex flex-wrap gap-5 justify-center">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            addToCartHandler={addToCartHandler}
            isAuth={isAuth}
          />
        ))}
      </div>
    </>
  );
};
