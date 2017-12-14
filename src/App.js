import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import InputForm from './components/InputForm';
import Plan from './components/Plan';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appliancesVal: Array(10).fill(null),
      tariffType: 'single',
      plans: this.props.plans,
      rankPlansView : [],
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSelect = this.handleSelect.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
    const appliancesVal = this.state.appliancesVal.slice();
    appliancesVal[i] = event.target.value;
    this.setState({
      appliancesVal: appliancesVal,
    });
  }

  handleSelect(event) {
    this.setState({ tariffType: event.target.value });
  }

  handleSubmit() {
    const B = [21.18584403, 29.36384773, 19.86804527, 15.63662393,
      19.11777776, 36.68998737,
      103.9259465, 115.0080556, 54.90888889, 47.32053032
    ];
    const HIS_USE = [
        [0.294842155,0.00887579769361,0.284585731,0.277100522825,0.0329572532837,0.0936787105447,0.273093218284,0.407540896892,0.367368671335,0.254826849773],
        [0.147563833912,0.405602752682,0.14041010537,0.342999628,0.0365344687298,0.133375397948,0.222651724295,0.0380139955212,0.110498268814,0.165202528677],
        [0.404131881321,0.618516144472,0.467892069798,0.342999628,0.0760635824713,0.173707700371,0.312776131945,0.307299730211,0.389038458,0.34687895042],
        [0.264426023001,0.388222338856,0.190215381939,0.342999628,0.534106319499,0.116392302218,0.172545503179,0.901557888721,0.598055626754,0.206655726],
        [0.111670478241,0.258544402,0.295672994769,0.342999628,0.212340338,0.086942177846,0.0226229463406,0.100076725704,0.261463434377,0.335139555283],
        [0.302966976719,0.526412619309,0.545026496835,0.342999628,0.171455451586,0.472670963063,0.239067959,0.992339304732,0.389038458,0.0665628987355],
        [0.44905599515,0.0952411800615,0.169132655165,0.0155397038907,0.212340338,0.40807744547,0.239067959,0.0708649344151,0.389038458,0.206655726],
        [0.369242232078,0.258544402,0.284585731,0.673907547754,0.0496556433802,0.124347049243,0.026772535683,0.638651519577,0.389038458,0.294550035675],
        [0.951165787105,0.258544402,0.281434416363,0.342999628,0.111988550505,0.306515277647,0.239067959,0.0411534557672,0.646113868882,0.208668227607],
        [0.544023351649,0.456607361623,0.732295091682,0.342999628,0.121124547572,0.201427269772,0.00819687330031,0.385318688088,0.389038458,0.206655726],
    ];

    const HIS_SINGLE_RATE = [
      [0.327595721217,0.190784421766,0.348988083247,0.0773012171535,0.353462983805,0.283098501798,0.121615053016,0.187283449911,0.312836800034,0.245197756285],
      [0.434779222568,0.283800419505,0.453334728749,0.169242378219,0.464162569298,0.383801896125,0.187852819523,0.261789919375,0.419998005864,0.335278510133],
      [0.339728891977,0.195122834452,0.364117543624,0.0768108940337,0.375299322907,0.29832312311,0.108768083529,0.179458350215,0.323665976037,0.258805794171],
      [0.475185673865,0.328933486571,0.486953162456,0.221493959526,0.495729303086,0.425936637321,0.246264596425,0.309881860275,0.441459838409,0.380088103109],
      [0.220404484762,0.106343720917,0.241685579454,0,0.228404435492,0.169655939433,0.0800505222891,0.138676023792,0.227344756309,0.138197814282],
      [0.448187173068,0.302239451052,0.462430645546,0.192593836914,0.472562649316,0.402192509403,0.218839467199,0.282786152696,0.41458027192,0.358573291705],
      [0.407466147242,0.244382917844,0.435690591709,0.118362809441,0.451517377336,0.350994658057,0.118752756034,0.211971738468,0.423534214947,0.294385361141],
      [0.390851715037,0.257434687582,0.40396436402,0.152131263884,0.405823137558,0.345096213651,0.199675046079,0.256039948838,0.358637450413,0.307393671811],
      [0.375996504229,0.232339164691,0.396338651003,0.118025831395,0.404270676954,0.329153837301,0.150062782219,0.219562481374,0.360517919237,0.28660178305],
      [0.323470271341,0.195456957525,0.340683223205,0.0883436065317,0.334750390254,0.269838822279,0.146038697078,0.208743361989,0.319128220835,0.230422330599],
    ];

    const HIS_TOU_RATE = [
      [0.168698879619,0.127693917911,0.213783232601,0.240315762641,0.279808743445,0,0.225518702606,0.147798358644,0.146490686101,0.111310498281],
      [0.175180424922,0.132387679045,0.22178407048,0.249254207309,0.289775739697,0,0.233844612374,0.153385800205,0.15167364905,0.115259528001],
      [0.18307909068,0.137072586,0.233026912595,0.261580072119,0.299736434349,0,0.242671663333,0.159239941971,0.157167601142,0.119572886002],
      [0.152793474309,0.110097221268,0.191531991685,0.214397319782,0.239786427303,0,0.197912464694,0.131181165198,0.129414677343,0.0947437251198],
      [0.180991985077,0.134922612881,0.22646449123,0.252235780048,0.280711899565,0.0114099027635,0.232231353223,0.157123786968,0.15496249367,0.118573948672],
      [0.156979185557,0.113767857614,0.197566614005,0.221234080654,0.24800241528,0,0.204014282743,0.134954573162,0.133194043623,0.0982226543994],
      [0.199147628794,0.169217279508,0.251900327951,0.286513465238,0.374608613531,0,0.288012362477,0.185220571284,0.185091983213,0.14916825944],
      [0.144666006272,0.104896463047,0.180184630663,0.201884478859,0.228656148522,0,0.188361667001,0.124884368601,0.123472705499,0.0900087837494],
      [0.173050836569,0.130355108052,0.21888889106,0.245935801991,0.28523210264,0,0.230532977712,0.151328657482,0.149616497553,0.113388155438],
      [0.166471591907,0.120752090903,0.21060944183,0.23578892241,0.263187706651,0,0.216273520973,0.142886838346,0.140804924488,0.104573570079],
    ];

    const appliancesVal = this.state.appliancesVal.slice();
    // get input values, calculate scores and set scores for this.props.plans
    let I = [];
    B.forEach(function(element,index){
      I[index] = appliancesVal[index] / element;
    });
    console.log(I);

    let S = [];
    // iterate all sample users
    HIS_USE.forEach(function(e,i){
      S[i] = calculateS(I, e);
    });
    console.log(S);

    console.log(this.state.tariffType);

    // store the plans will be displayed, the lenth will be 5 or 10 depending on tariffType
    var plansTmp = [];
    if(this.state.tariffType !== 'time'){
      let planArr = [
        [],[],[],[],[],[],[],[],[],[]
      ];
      HIS_SINGLE_RATE.forEach(function(row,index){

        // there are 10 plans in HIS_SINGLE_RATE
        for(let i=0;i<10;i++){
          planArr[i].push(row[i]);
        }
      });
      for(let i=0;i<10;i++){
        // update score for a plan
        this.props.plans[i].score = calculateRate(S, planArr[i]);
      }

      plansTmp = this.props.plans.slice(0,10);
    }

    if(this.state.tariffType !== 'single'){
      let planArr = [
        [],[],[],[],[],[],[],[],[],[]
      ];
      HIS_TOU_RATE.forEach(function(row,index){

        // there are 10 plans in HIS_SINGLE_RATE
        for(let i=0;i<10;i++){
          planArr[i].push(row[i]);
        }
      });
      for(let i=0;i<10;i++){
        // update score for a plan
        let index = i+10;
        console.log(index);
        this.props.plans[index].score = calculateRate(S, planArr[i]);
      }
      let tmpArr = this.props.plans.slice(10,20);
      plansTmp = plansTmp.concat(tmpArr);
    }

    
    

    // const tmpRankPlans = [].concat(this.props.plans)
    const tmpRankPlans = [].concat(plansTmp)
    .sort((a, b) => a.score > b.score)
    .map((item, i) => 
        // <div key={i}> {item.matchID} {item.timeM}{item.description}</div>
        <Plan rank={i+1} plan={item}/>
      );

    this.setState({rankPlansView: tmpRankPlans});
    // why doesn't work, still refresh page!!! ??
    // event.preventDefault();
  }

  render() {
    return (
      <div id="page">
        <Header />
        <InputForm
          appliances={this.props.appliances}
          appliancesVal={this.state.appliancesVal}
          tariffType={this.state.tariffType}
          onChange={(i, e) => this.handleChange(i, e)}
          onSelect={(e) => this.handleSelect(e)}
          onSubmit={() => this.handleSubmit()}
        />

        <section>
          <div class="container page-container-four">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="page-inner-container">

                  {this.state.rankPlansView}

                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

function calculateS(A1, A2){
  let sum=0;
  A1.forEach(function(val,i){
    sum = sum + ((val - A2[i]) * (val - A2[i]));
  });
  return(1 - Math.sqrt(sum));
}

// calculate the rate value for a user of a plan
function calculateRate(S, R){
  let sum=0;
  let sr=0;
  S.forEach(function(val,i){
    sum = sum + val;
    sr = sr + val*R[i];
  });
  return(sr/sum);
}

export default App;
