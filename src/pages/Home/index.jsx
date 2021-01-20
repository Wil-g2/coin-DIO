import React from "react";
import Card from "../../components/Card";
import { Container } from "./styles";
function Home() {
  const [value, setValue] = React.useState(0);
  const [currency, setCurrency] = React.useState(0);
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/json/all")
      .then((res) => res.json())
      .then((json) => {
        setData(json.USD);
        console.log(json.USD);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {/* ask: "5.3583"
bid: "5.3578"
code: "USD"
codein: "BRL"
create_date: "2021-01-19 19:00:04"
high: "5.3581"
low: "5.3581"
name: "Dólar Comercial"
pctChange: "0"
timestamp: "1611091803"
varBid: "0.0003" */}
      {!loading && (
        <Container>
          <Card value={data.ask} currency={data.code} />
        </Container>
      )}
    </div>
  );
}

export default Home;
