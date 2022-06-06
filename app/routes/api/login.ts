import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  console.log(request);
  return json(
    {
      success: true,
      content: "Tes Route Api",
    },
    200
  );
};
