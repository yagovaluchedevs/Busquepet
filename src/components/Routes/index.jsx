import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Feed from "../../pages/feed";
import Filter from "../../pages/filtro";
import CardPet from "../../pages/card-pet";
import ProfilePerson from "../../pages/perfil-adotante";
import RegisterPet from "../../pages/cadastro-do-doador/register-person/register-donor/register-pet";
import RegisterPerson from "../../pages/cadastro-do-doador/register-person/index";
import PerfilPet from "../../pages/perfil-pet";
import Login from "../../pages/login";
import Profile from "../../pages/perfil-doador/perfil-doador00";
import ProfileEdit from "../../pages/perfil-doador/info-do-doador";
import RegisterAdopter from "../../pages/cadastro-do-doador/register-person/adopter-registration/steps";
import ContactDonor from "../../pages/contato-doador-cadastro";
import RegisterDonor from "../../pages/cadastro-do-doador/register-person/register-donor/steps";
import { onAuthStateChange } from "../../services/auth.service";

export default function Routes() {
  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => unsubscribe();
  }, []);
  console.log(user);

  return (
    <BrowserRouter>
      <Switch>
        {user.loggedIn ? (
          <>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/filtro" component={Filter} />
            <Route exact path="/card-do-Pet" component={CardPet} />
            <Route exact path="/perfil-do-adotante" component={ProfilePerson} />
            <Route exact path="/contato-doador" component={ContactDonor} />
            <Route exact path="/perfil" component={Profile} />
            <Route exact path="/perfil-edit" component={ProfileEdit} />
            <Route exact path="/perfil-do-pet/:id" component={PerfilPet} />
            <Redirect to="/feed" />
          </>
        ) : (
          <>
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
            <Route
              exact
              path="/cadastro-tipo-de-pessoa"
              component={RegisterPerson}
            />
            <Route exact path="/cadastro-do-pet" component={RegisterPet} />
            <Route exact path="/feed" component={Feed} />
            <Route
              exact
              path="/registro-adotante"
              component={RegisterAdopter}
            />
            <Route exact path="/registro-doador" component={RegisterDonor} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
