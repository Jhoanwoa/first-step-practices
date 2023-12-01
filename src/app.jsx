import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="app">
      <TwitterFollowCard  userName="jhoanwoa" initialIsFollowing={true}>Jhoan Orozco</TwitterFollowCard>
      <TwitterFollowCard  userName="melanie.3344">Melanie Guerrero</TwitterFollowCard>
      <TwitterFollowCard  userName="midudev">Miguel Ángel Durán</TwitterFollowCard>
      <TwitterFollowCard  userName="holamundodev">Nicolás Schürmann</TwitterFollowCard>
      <TwitterFollowCard  userName="mouredev">Brais Moure</TwitterFollowCard>
      <TwitterFollowCard  userName="soydalto">Lucas Dalto</TwitterFollowCard>
      <TwitterFollowCard  userName="carlosazaustre">Carlos | Aprende JavaScript</TwitterFollowCard>
      <TwitterFollowCard  userName="bts_official_bighit">BTS</TwitterFollowCard>
      <TwitterFollowCard  userName="jeancarloalvitres">Jeancarlo Alvitres</TwitterFollowCard>
    </section>
  );
}
