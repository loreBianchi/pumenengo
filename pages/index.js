import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}
