import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="app">
      <TwitterFollowCard  userName="jhoanwoa" initialIsFollowing={true}>Jhoan Orozco</TwitterFollowCard>
      <TwitterFollowCard  userName="melanie.3344">Melanie Orozco</TwitterFollowCard>
      <TwitterFollowCard  userName="mauricrack98">Mauricio Orozco</TwitterFollowCard>
      <TwitterFollowCard  userName="jeancarloalvitres">Jeancarlo Alvitres</TwitterFollowCard>
      <TwitterFollowCard  userName="josemiguelhu">Jose Miguel</TwitterFollowCard>
      <TwitterFollowCard  userName="bts_official_bighit">BTS</TwitterFollowCard>
    </section>
  );
}
