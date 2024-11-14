// import env from "@/constants/environment";
// import axios from "axios";
// import {Cron} from "croner";

// export async function keepAwake() {
//     Cron("*/14 * * * *", async () => {
//         try {
//             await axios.get(env.appUrl!);
//         } catch (e) {
//             console.log(e);
//         }
//     });
// }