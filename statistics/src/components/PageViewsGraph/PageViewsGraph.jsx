import "../PageViewsGraph/PageViewsGraph.css";
("use-client");
import { BarChart, Bar } from "recharts";

const data = [
  { name: "Jan", uv: 1000, pv: 1400, amt: 2400 },
  { name: "Feb", uv: 1000, pv: 798, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 3800, amt: 2290 },
  { name: "Apr", uv: 1780, pv: 2908, amt: 2000 },
  { name: "May", uv: 890, pv: 1200, amt: 2181 },
  { name: "Jun", uv: 890, pv: 1000, amt: 2500 },
  { name: "Jul", uv: 690, pv: 500, amt: 2100 },
  { name: "Jan", uv: 1000, pv: 1400, amt: 2400 },
  { name: "Feb", uv: 1000, pv: 798, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 3800, amt: 2290 },
  { name: "Apr", uv: 1780, pv: 2908, amt: 2000 },
  { name: "May", uv: 890, pv: 1200, amt: 2181 },
  { name: "Jun", uv: 890, pv: 1000, amt: 2500 },
  { name: "Jul", uv: 690, pv: 500, amt: 2100 },
  { name: "Jan", uv: 1000, pv: 1400, amt: 2400 },
  { name: "Feb", uv: 1000, pv: 798, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 3800, amt: 2290 },
  { name: "Apr", uv: 1780, pv: 2908, amt: 2000 },
  { name: "May", uv: 890, pv: 1200, amt: 2181 },
  { name: "Jun", uv: 890, pv: 1000, amt: 2500 },
  { name: "Jul", uv: 690, pv: 500, amt: 2100 },
  { name: "Jan", uv: 1000, pv: 1400, amt: 2400 },
  { name: "Feb", uv: 1000, pv: 798, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 3800, amt: 2290 },
  { name: "Apr", uv: 1780, pv: 2908, amt: 2000 },
  { name: "May", uv: 890, pv: 1200, amt: 2181 },
];

const PageViewsGraph = () => {
  return (
    <>
      <section className="wrapper-statics">
        <p>Page views per minutes</p>
        <BarChart
          width={668}
          height={100}
          data={data}
          barCategoryGap="10%"
          barGap={10}
        >
          <Bar dataKey="pv" fill="#0E1731" barSize={9} />
          <Bar dataKey="uv" fill="#0E1731" barSize={9} />
        </BarChart>
        <h3>View refferals</h3>
      </section>
    </>
  );
};

export default PageViewsGraph;
