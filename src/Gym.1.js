
// gym exercies
// gym exercies start
function Gym() {
  const [api_data, setdata] = useState([]);
  const [back_data, setbackdata] = useState([]);
  const [shoulder_data, setshoulderdata] = useState([]);
  const [triceps_data, settricepsdata] = useState([]);
  const [bicep_data, setbicepdata] = useState([]);
  const [leg_data, setlegdata] = useState([]);
  const [Abdominal_data, setAbdominaldata] = useState([]);
  const [Combined_data, setCombineddata] = useState([]);
  const [Cardio_data, setCardiodata] = useState([]);

  //chest hook
 
  useEffect(() => {
    const getData = () => {
      fetch("https://capstoneproject1299.herokuapp.com/chestdata", { method: "GET" })
        .then((data) => data.json())
        .then((newdata) => setdata(newdata));
    };
    getData();



  }, []);


  //back hook
  const backdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/backdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setbackdata(newdata));
  };
  useEffect(() => {

    backdata();
  }, []);




  //Shoulderdata
  const shoulderdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Shoulderdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setshoulderdata(newdata));
  };
  useEffect(() => {

    shoulderdata();
  }, []);



  //Tricepsdata
  const tricep = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Tricepsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => settricepsdata(newdata));
  };
  useEffect(() => {

    tricep();
  }, []);



  //bicepdata
  const bicepsdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/bicepsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setbicepdata(newdata));
  };
  useEffect(() => {

    bicepsdata();
  }, []);




  //Legs data collection
  const legdata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Legsdata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setlegdata(newdata));
  };
  useEffect(() => {

    legdata();
  }, []);




  //Abdominal data collection
  const Abdominaldata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Abdominaldata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setAbdominaldata(newdata));
  };
  useEffect(() => {

    Abdominaldata();
  }, []);




  //Combined data collection
  const Combineddata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Combineddata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setCombineddata(newdata));
  };
  useEffect(() => {

    Combineddata();
  }, []);


  //Combined data collection
  const Cardiodata = () => {
    fetch("https://capstoneproject1299.herokuapp.com/Cardiodata", { method: "GET" })
      .then((data) => data.json())
      .then((newdata) => setCardiodata(newdata));
  };
  useEffect(() => {

    Cardiodata();

  }, []);
  return (
    <div className="App">
      <div>
        <div className="link_gym">
          <Link className="path" to="/redirect">click link</Link>

          <Link className="path" to="/back">back</Link>

          <Link className="path" to="/shoulder">shoulder</Link>

          <Link className="path" to="/triceps">triceps</Link>

          <Link className="path" to="/bicep">bicep</Link>

          <Link className="path" to="/leg">Legs</Link>

          <Link className="path" to="/Abdominal">Abdominal</Link>

          <Link className="path" to="/Combined">Combined</Link>

          <Link className="path" to="/Cardio">Cardio</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/redirect">
              <div>
                {api_data.map((ur) => (
                  <Chest id={ur._id}  key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/back">
              <div>
                {back_data.map((ur) => (
                  <Back_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/shoulder">
              <div>
                {shoulder_data.map((ur) => (
                  <Shoulder_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/triceps">
              <div>
                {triceps_data.map((ur) => (
                  <Tricep_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/bicep">
              <div>
                {bicep_data.map((ur) => (
                  <Bicep_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/leg">
              <div>
                {leg_data.map((ur) => (
                  <Leg_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/Abdominal">
              <div>
                {Abdominal_data.map((ur) => (
                  <Abdominal_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/Combined">
              <div>
                {Combined_data.map((ur) => (
                  <Combined_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
            <Route path="/Cardio">
              <div>
                {Cardio_data.map((ur) => (
                  <Cardio_component key={ur._id} name={ur.data.bi.name} value={ur.data.bi.description} img={ur.data.bi.img} link={ur.data.bi.link} steps={ur.data.bi.steps} tips={ur.data.bi.Tips} />

                ))}
              </div>
            </Route>
          </Switch>
        </div>
      </div>


    </div>
  );
}
function Chest({ name, value, img, link, steps, tips, id }) {


  const deletUser = () => {
    fetch(`http://localhost:1234/deletechest/` + id,
      { method: "DELETE" })
    console.log("deleted");
    console.log({ id });
  };

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
        <button className="btn" onClick={deletUser}>Delete user</button>

      </div>
    </>
  );
}
function Back_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Shoulder_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Tricep_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Bicep_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Leg_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Abdominal_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Combined_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
function Cardio_component({ name, value, img, link, steps, tips }) {

  return (
    <>
      <div className="div1_gym">
        <div className="div2">
          <img className="img" src={img} />
          {/* <ReactPlayer
    className="video"
                width={"60%"}
                height={"30%"}
                url={link}
              /> */}
        </div>
        <div className="div3">
          <h1 className="title_gym">{name}</h1>
          <p className="data">dis:{value}</p>
          {/* <a href={link}>vist</a> */}
          <p className="data">steps:{steps}</p>
          <p className="data textdata">tips:{tips}</p>

        </div>
      </div>
    </>
  );
}
