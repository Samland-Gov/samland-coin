/*
 * Copyright 2016 - 2022 Drew Edwards, tmpim
 *
 * This file is part of Krist.
 *
 * Krist is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Krist is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Krist. If not, see <http://www.gnu.org/licenses/>.
 *
 * For more project information, see <https://github.com/tmpim/krist>.
 */

import { Router } from "express";

import routerAddresses from "./addresses";
import routerBlocks from "./blocks";
import routerLogin from "./login";
import routerMotd from "./motd";
import routerNames from "./names";
import routerSubmission from "./submission";
import routerSupply from "./supply";
import routerTransactions from "./transactions";
import routerV2 from "./v2";
import routerWalletVersion from "./walletVersion";
import routerWebsockets from "./websockets";
import routerWhatsNew from "./whatsNew";
import routerWork from "./work";

import routerLookup from "./lookup";
import routerSearch from "./search";

import routerHomepage from "./homepage";

// Primary API router
export default (): Router => {
  const router = Router();

  router.use(routerAddresses());
  router.use(routerBlocks());
  router.use(routerLogin());
  router.use(routerMotd());
  router.use(routerNames());
  router.use(routerSubmission());
  router.use(routerSupply());
  router.use(routerTransactions());
  router.use(routerV2());
  router.use(routerWalletVersion());
  router.use(routerWebsockets());
  router.use(routerWhatsNew());
  router.use(routerWork());

  router.use("/lookup", routerLookup());
  router.use("/search", routerSearch());

  // Run the homepage route last so the Legacy API can take hold of /
  router.use(routerHomepage());

  return router;
};
