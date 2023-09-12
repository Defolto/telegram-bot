import { Telegram } from "telegraf";
import { idChat, TOKEN } from "./config.js";

const telega = new Telegram(TOKEN)

telega.sendMessage(idChat, "Привет мир")