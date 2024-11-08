const express = require("express");
const app = express();
const cors = require("cors");

const port = 3032;
app.use(cors());
app.use(express.json());

let id = 0;
app.post("/listing-item", (req, res) => {
  let result = getMock();
  const accommodation = req.body.accommodation;
  if (accommodation) {
    result = result.filter((i) => {
      return i.location
        .toLowerCase()
        .includes(accommodation.trim().toLowerCase());
    });
  }
  const name = req.body.name;
  if (name) {
    result = result.filter((i) => {
      return i.name.toLowerCase().includes(name.trim().toLowerCase());
    });
  }
  const minPrice = req.body.min_price;
  if (minPrice) {
    const numMinPrice = Number(minPrice);
    if (numMinPrice) {
      result = result.filter((i) => {
        return i.price_per_night > numMinPrice;
      });
    }
  }
  const maxPrice = req.body.max_price;
  if (maxPrice) {
    const numMaxPrice = Number(maxPrice);
    if (numMaxPrice) {
      result = result.filter((i) => {
        return i.price_per_night < numMaxPrice;
      });
    }
  }
  console.log(req.body);

  for (const item of result) {
    id++;
    item.id = id;
  }
  res.json({ data: result });
});

app.get("/listing-item", (req, res) => {
  let result = getMock();
  const accommodation = req.query.accommodation;
  if (accommodation) {
    result = result.filter((i) => {
      return i.location
        .toLowerCase()
        .includes(accommodation.trim().toLowerCase());
    });
  }
  const name = req.query.name;
  if (name) {
    result = result.filter((i) => {
      return i.name.toLowerCase().includes(name.trim().toLowerCase());
    });
  }
  const minPrice = req.query.min_price;
  if (minPrice) {
    const numMinPrice = Number(minPrice);
    if (numMinPrice) {
      result = result.filter((i) => {
        return i.price_per_night > numMinPrice;
      });
    }
  }
  const maxPrice = req.query.max_price;
  if (maxPrice) {
    const numMaxPrice = Number(maxPrice);
    if (numMaxPrice) {
      result = result.filter((i) => {
        return i.price_per_night < numMaxPrice;
      });
    }
  }
  console.log(req.query);

  for (const item of result) {
    id++;
    item.id = id;
  }
  res.json({ data: result });
});

app.get("/ping", (req, res) => {
  console.log(123);
  res.json("ok");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function getMock() {
  return [
    {
      id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
      name: "Brightwoods Cabin",
      location: "Bridlepath, Ontario, Canada",
      price_per_night: 658,
      rating: 4.9,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/ab22a790-ec9e-4783-b049-6f1bce6fd7fa_1730773822055321831?Expires=-62135596800&Signature=hwx5gOtdt6wpU-vP3-OjKOnY~Od-q0Wldiq8B-vmB7UP5yTuFZCD2gQHeOm7h79IOr5kshcq9dW2NJDxuEh3wcUU4AWhOJ6B6mk5r3qNgPpAWHRxdHGLia~hse6xFZB77DPBCX8h1lgYomOwrZRuwk0bEXSMZBUZ20LL6Vu8cA5SzI50bG59YKIDNTC2j9nnXIDbt0~FkRbe4EGK6URUP3P76lRDwv6-xWiUMeyFS8BHL2pATkowtfwcDZbcfKi60-QTwiadyCNx9FZMxGQUYanJlV6L2tfzSuEXOWzCFP3MAiFWtaROOks5M3wupRB8ZmaQE8KJszkOUYmcRkYbMg__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "23e4f5g6-h7i8-j9k0-l1m2-n3o4p5q6r7s",
      name: "Urban Loft",
      location: "Georgina Bay, Ontario, Canada",
      price_per_night: 410,
      rating: 4.5,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/bb10616e-5e0b-4ba5-bedf-30e421dd9400_1730773822055583930?Expires=-62135596800&Signature=NsjXWIg9JK4hkQHdrT7HUlyiiWfNtfMFnc~~ax~MMD6tJ0iTuP~jeSoTUFe40pBEa5pWQKRsmtewqgW63tkct1uytAIAb38nAyWXcVt0qso4rWZvrStdSEw7iKGy3EnrRywUlYcgDvC50dP1CQzcLpcdK-Bw~4UG3NBR9vRA9fw9njYu51SqHwzmwc3qwVll66fn-edtnyjFFaOni0Na8GWZKCElI0uPbsjX~ggxbuUUEM7tTuT3IVKNYS4vGl5O6seNErb-3E4ElcrWNsRPu5eKJKOVMYfHZ4uWoauXWGJ8cr-aQjUiuDD8W4dNlMWDkASEMqUPRjkFa470~cOjcg__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "87a6b5c4-d3e2-f1g0-h9i8-j7k6l5m4n3o",
      name: "Forestville Cottages",
      location: "Simcoe, Ontario Canada",
      price_per_night: 325,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/190119c6-66bd-44de-859a-49554ecbba54_1730773822055780625?Expires=-62135596800&Signature=UMoeqo3XRcN~eyp9LngaMnpPLxmqEBEzudW41mXtaivWN5Db3j74~k6QCUKtwzJ3x~MSw~xEbQdo4dYmiu0mZ93D4-lcmgPIYsWq9aLXoHnHvkuOVlOjfrINR6L~~-cZqOGN~HMTCGWalV9EEHebNOF3Df0u-3ot8shERg22LKJR1OayXbT-40XuI-rDNa0uZL4rHEgNKHUFP4ciySOHCVNZAemR8OXG6cz9jlTU10ROVmSPhKWFzAttyNppBiEvRxTo0ovaShuj-g1PjHmdh6neARwBlLdUnba2SvXd6Vn45xaLhth4QMc0-iw4gbd69x~i9KeJH47XFB5SivpjcA__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "09k8j7i6-h5g4-f3e2-d1c0-b9a87654321",
      name: "Unionville Logde",
      location: "Markham, Ontario Canada",
      price_per_night: 485,
      rating: 4.6,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/29efe773-d51d-47f6-b9d1-f87fb11a6f3d_1730773822055945190?Expires=-62135596800&Signature=oWiiWlcNnj3gO0FvIbdkQd7cW4ry7HCY5qSE1qsia9RnyjBm7pVQ-IjKRTmGjllkgMUEVtkZvz2gdECcppT00na7NKBeUuVf7P8iID1M~PAjrs5vdXoLbjTWZpVbcRkVXAL2aYspZA2M7FMXZmvlOosirFLENc1wIa4J6GYSD7WnHd6XUnBkfZjQ2s7zGZELbbuDnORNmaRY1~c5YzHGNxJ~icLUjYZogw6wHox0z7orVZtV0hLatsfdLkj3I3bOluTslxCMdxhLb4HMwwZsCrSfw7dy65K3coyZJaqARywAljIGm4NQzllaEfAYV9j3t2DPHhC9ox5he8-xwES3Dg__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "abcdef01-2345-6789-abcd-ef0123456789",
      name: "Missisuaga Aistream",
      location: "Missisauga, Ontario, Canada",
      price_per_night: 502,
      rating: 4.8,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/dc9564fa-0b30-42dc-86c1-58f2fed9ec7a_1730773822056150835?Expires=-62135596800&Signature=jItW9clCE~hZ~ITSgHSr~ECd1TknYDM7WxDqcrUgEOV7YWNVGW7w9d9PxAUbdOuv7r8COOSuGwgEnklnB2zr8n6Kk8dh~uHWLs9~vVLZp3hE~9uUygMFdvq~jRI~c-2GSC5xlb2LOUHzM13KXPdCOogqjVqJsjIDB0kySw9BTs9VBLiFlT8wjwTXwn0dx3e568cef6nt4hVTCUa0alpNF7NUhXQ5vXuLgi68EYEiXaHi1Zvcza6xSlUfKnOVeimsMvcd2Rc7QjERoWM3Ji8CZqeVkp5Gu3GNBvNjaSsuaZI5m0dymXm3rO1i5Yb7iFwc5mjMKupLhcdAo-C8tcFchw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "fedcba98-7654-3210-fedc-ba9876543210",
      name: "Niagara Homes",
      location: "Niagara, Ontario, Canada",
      price_per_night: 655,
      rating: 4.9,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/6d5712f8-3814-4918-8cb2-9ce907a43242_1730773822056578653?Expires=-62135596800&Signature=le0yJfEhegxWpN7lKKouFyVHgpSe8xJTlK1X8CMPyecw1KQeAXfaHj9OX7PqtzHVRpIk-f0bJwSayz~-ioCmuj6k1UdCkbOl~1~XjuC0lvVvxk3T6gJh3C5Wcyk3slLq6YEXUjmUxlJL8yjOlJmwSh9ctuM1A99Tp37RLHX3GnXCwfno4-sGOs7w-FrnnG6MlRaqax9jfwkNqqXgiMDMRXa9dbJvkghegNJPsrpC8gAs-p~wVjh5ZgItRQWAyKy~wQMWElhPRQFZxHTeNSXNb872zBS42o74ymP5FPu8fzGMONMp~iPF8BXCvefYcwW~0HW~uzG2NAXfZh4d69nnaw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "43210987-6543-2109-8765-432109876543",
      name: "Sunny Estate",
      location: "Barcort, Ontario Canada",
      price_per_night: 320,
      rating: 5.0,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/d1d8da97-36e0-47e3-9f7d-dac478a4dc90_1730773822057177869?Expires=-62135596800&Signature=dPw-Qkd5gnQ7szfQYXqnwSv~WrilqyIeZDehfmlTDBC-pYpQzIBJD79ZycMW0LiuJdo9gp7EenWRQTT1Ohltg2joZXlmBV~PDM7nU6H4EQQLMqZ2xwDp9rXTX4zyxbzZqxSbQGuRy41MEKY9two3ulIzmo7BTKNKgC-NERMtuNtJKWL9PRaNyLl9tYvFw6ZPMzjaCWDMRMGu6M8SUJKTvDfuJbXaRxnry9UeBV2SfbyQLYcfY367k3FY7G9jduT0iygPcjUDI-8PXWQgRJ3EUAeVKOsUssKPZXZnoCXsA1-oFv48-RxqHN67iuinJ56fnEiC4h-1prW1o9C7lD0uSw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "89012345-6789-abcd-ef01-234567890123",
      name: "Lawrence Hills",
      location: "Lawrence, Ontario Canada",
      price_per_night: 350,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/69489946-0866-48eb-b9c7-8fde03274dd6_1730773822059272735?Expires=-62135596800&Signature=QQQHLGseeuvq8l~gmSYKN1UsGIjeDQDkfoteCdudqsOATk99n4Yqw9ftr8E9yNoi5yV6JTrquyqbVaeIeJ7lGgONC~xJExUbz64Z-6-~NVL1TRKSOQJNuxwandtnXJTDwfNhhwyD0Og1NOr8RUwbgGcdVW7BvKUGEFJj4d~IhvvvDvHz0gAB2VO~LkuVJDBYyGnzi8I~GBIuIMadx7yme4U2wRyk7t1VtwhFYmmD2xTYqzHAkk0Qaz0CAX0mq1IlIGB42r7OaSATNOCp6DM5mEtfy464m5ATyug2MCcGSetGwHFlMl8N4fIClFRxcMpeqiXFcYFWKzTRtC-C1eiXMw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "c7b6a5d4-3e2f-10g9-8h7i-6j5k4l3m2n1",
      name: "Simcoe Lake Lodge",
      location: "Simcoe, Ontario, Canada",
      price_per_night: 395,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/92e51964-9ab3-4a8c-a4d3-fba4b63047bf_1730773822060065260?Expires=-62135596800&Signature=GGe9wlio4z8ex4EBkBjknGJS0m2Tz1x4Nhhkkz~P3G0Hw4vsRcvWD68Jf6awCHiJCvZ~rrYKdeTUIAvUsA0AjYNRoSpA6xSJms1bsFMyyfFYnL8WlBNdFBLCLm8a7E8c-TQbV34V~iseUDOpHKKcjhqkneq32RI4gJCYDjnyYBWxBgoExTV93bvmrkW0VEBmweeAGw6lsCwT~6PsN-JnSqEzXz7scmUUEV~a3vFz841RfN8Wk-1TzoMEkPYRRdwngQ4-2epQ4O5hLbATP-06MbLstxivx9f7cbPQZzDYFFgohsFZ8vWqdlRUtTJPwmCaJ6e1pdlnRd-j3RXSaXbG~w__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "n1m2l3k4-j5i6-h7g8-f9e0-d1c2b3a4567",
      name: "Wasaga Beach Home",
      location: "Georgina Bay, Ontario, Canada",
      price_per_night: 385,
      rating: 5.0,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/e2dca977-47e3-468e-844a-88d87f0db875_1730773822060218832?Expires=-62135596800&Signature=c88rgdy5JjK~bVIrC6nUj5Gy0ECqh-6KDHz~EFw8uNTQfhJlLqNeJVkFthNtuP7H5lgiEbYCjehEhXRz27QjFMFRmsgxMp2prp8Snjzmg3wNgvVsg71CqjlHMsMivSDwvOVl41VKivbuo5zZk-1JxFpt3PN1npyoUsRM8YXh1ud32Cmba48ySPrEXMHrmk3ce9zZp0CFW7rnaRmXJaH8E0ndklVTSAW2IWYx38J7F24CrxwDltImg~NLW80ERxEleVRAdsaPiRbdzoi0EdIL2MtMhFfDID6UuZFW0WcamMH7Odbs5zSwL1Mumb4P9ZZbGvE1-bBSNSubMYhB5IOwLw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "567890ab-cdef-0123-4567-89abcdef0123",
      name: "Banff Hills",
      location: "Banff, Alberta, Canada",
      price_per_night: 385,
      rating: 5.0,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/ae1d8a99-2900-4c6d-8ab6-2bade8aa032a_1730773822060420817?Expires=-62135596800&Signature=pk4au8vfB9nPZJvwfBVIlMHdDw37JQbDCvd8XBZ8hcAJdtnA3Awph8Er8a2dmSDa~b5CSHvpS9zhJ9WJWX4NK5q6HNc9tkw-AqaoOt6FitJkCjpRIL-5jYjjW9dPekhXqZpJyJVvxrWSRzyjG4lQ2lTSesxobbotFjGPAHkAjp~-tygeOiC8xXKQYcVPtRbeiGw0~L3cu~OeT1kveRZN~AwBX4FgOrCx45nDcqlIlrCGmonmu0fn2V5klzFYck76K9z1kfPypNOQOBZeRDNx3CdCYTkUf5LQwIxmfyrIccY2cEILf3EhtbB0uEb9I7cqcifIgEQ5G2Pk4S~wLGzq3Q__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "98765432-10fe-dcba-9876-543210fedcba",
      name: "Creemore Canada",
      location: "Creemore, Alberta, Canada",
      price_per_night: 385,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/d673cc76-5bd6-41e7-86bf-4bc326ad0b7e_1730773822061531560?Expires=-62135596800&Signature=DtU6inXTlkVWfyoF077VAR8lZZLt1itrPI~wJ1X2A7EwzwYtSvZp3jnGdHiCcpJyF9t4pNclApEGoNOYpnxP2d3pSfr3eDSWTxNodzOGYQNuqXzpsA-VSHSaltQClz58FVGk4J9oxCMYBxFbDGKBV3dvmXcGAdtzxiB-2zMHZTa2zTRu3L6vzNt83C-DGZx5IyS0DG-neBf-jHMWevh6YOfuIBy0K~fOyRY~qoH5hrFWipEvHqfZgb~FGCN8LzPiLph5FAQOqrzmsawKr~ymeazUh94Kfd~duOCnzH3JgftfF7ZDPemEeiN77vy4IVHrwJfcugCo3tUADD7dxqGlDw__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "edc8ba79-6453-201f-edcb-a9876543210f",
      name: "Kawartha Lakes",
      location: "Kawartha, Alberta, Canada",
      price_per_night: 385,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/b7b92749-75aa-4ca6-865b-a4fcf17e8faf_1730773822061698664?Expires=-62135596800&Signature=DxoAtetsjuqog68Rw636WEmSkpvFcaSmuxJiUOAaF05KE29UhoPqPMwaYeR50q31JXTQfc-bt-Dubd76lS~uAuqdhTyByHMyf8Ot1YN-xl4ol63g6zJgPRApZYW3oclt5BHu12lQfFfISFKQV4Xr4AeM9B2GIW8loSOR88MzJN-2OTIIz9nyQuSoLIjPaQKoxxXxN-AwwaT6BQiLrjyCKZi9oh4gOCzvYd1-0YLYM49OwCVcGx8ve1J4~Gmea-ax42U15kfbEoF~Ogyu4oHUl2OzR5sOVMAdy1P23JsD6CV5iz7qbiWLkdy9G-IO6qaqCz3zl03LgvJzYaa0iYHIrQ__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "10325476-98ba-dcfe-1032-547698badcfe",
      name: "Revelstoke Cabin",
      location: "Revelstoke, Alberta, Canada",
      price_per_night: 385,
      rating: 5.0,
      show_chart: true,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/064c4386-099f-4758-b296-c52a26180bdc_1730773822061856775?Expires=-62135596800&Signature=D6~X4Q7c6UwTdrnIMBYTrPgWQiaFqw-RapWaEn0SWiXL1tQ1jOR~zNt9vAYzyZKgM8Gvt0Xi8eqL2P0YHIOd7EvG2LzwxRyaz1TKdyWdYrFW5DWP~ejlS9ACH2s5Ia-qlEu943nDkwf0mydpGR1e5xr3v8yvnQKRzeo3zDFdptT~UBUWrkeBug740d1cTfplmP47tBo3D5ozspVNL~GBJUZXKHYwzgyBC2RMvuVwAFI9~2UM-APUTiibCP4S~KWEnUEFr4mU1PCi9ZgfES8z5hVrxfwp~opEvrASyJlZQYxah7rY8dA6qrLKJ5uGkXkn6y~FrC5IZMt6krL80mSqkQ__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "78901234-5678-90ab-cdef-0123456789ab",
      name: "Brightwoods Estate",
      location: "Brightwoods Estate",
      price_per_night: 385,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/fd13b233-b54f-4578-93a2-f2adcb29ad4e_1730773822062746275?Expires=-62135596800&Signature=Nx-x~u5W99wME--RjXWJzLiDsYU9wJC5tVfHmXQv1sozrfwCckEKkKkvXZ8Sysmr-UWJErZsLupyHRbAaLU9-j1WFES9OfWd2R0L6RUZsa7bSLVP2xSCF6nvJw7aKqa4feoqV-2hwjwWUajbrjbtJ2uVBm1piGcxv0TtCNekhetxYls~ROKlUDQEulmEF3OFSLxgUz3zPjFUXfBzEi5vT4bwqkmu5RL28-KMZB9ShKiTJzBhbDdeOephq5Nzwv1CHGZw-etOuODGtOu1DWiPzFD4yFVvyqyhUvephQvT0IkalVktIpFZwRshZR6Cwc2h-clP8QE35JxhqOyH-6~17w__&Key-Pair-Id=K2EOYUP2MYY488",
    },
    {
      id: "34567890-1234-5678-90ab-cdef01234567",
      name: "Brightwoods Estate",
      location: "Brightwoods Estate",
      price_per_night: 385,
      rating: 5.0,
      show_chart: false,
      img: "https://dat20jvqpp4ts.cloudfront.net/2oNmxcNPyKSi03fkRgZAvX9CAZ5/8d9558e8-aa95-47f2-a180-28ba23457e5e_1730773822063078275?Expires=-62135596800&Signature=pqHutTDk~IYWaAAgPV3tolviiHM-xhSbWmR8pmtmadg0yNGt1nu~HJIIa-f-GrBDF7~zQZElzE1AMYrm2rHQGJq42tgiWrCBY~BeSVcl1IQXoPSchSshAFM~INjQSDr0dDANuQDF43JGyyWqvAMzuSsWQEM~zI95BGzWV97d8PUnYynKjlZ5YRoIweKbsiY-RfRvymQchUxd4kmE-yn7s-CcRlfg4wmzt8I-M2mDbInLdZta24wSXC8n3HesYU9z4RBlPj8vhdubivPFQwb4st56Khd51tfz57nI8RpA6Ne~pgjmGAl~7j3e9ZSFGY616OYxBMUxwS-87XYgMO1ItA__&Key-Pair-Id=K2EOYUP2MYY488",
    },
  ];
}
