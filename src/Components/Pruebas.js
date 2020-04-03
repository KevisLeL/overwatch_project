import React, { useState } from 'react';



const Pruebas = () => {

   const [m1, setM1] = useState ('');
   const [m2, setM2] = useState ('');
   const [d2, setD2] = useState ('');
   const [d1, setD1] = useState ('');
   const [s1, setS1] = useState ('');
   const [s2, setS2] = useState ('');
   const [r1, setR1] = useState ('');
   const [r2, setR2] = useState ('');
   const [result1, setResult1 ] = useState('');
   const [result2, setResult2 ] = useState('');
   const [result3, setResult3 ] = useState('');
   const [result4, setResult4 ] = useState('');

    const multiply = () => {
    var multiplyResult = m1 * m2;
    setResult1(multiplyResult);
     return multiplyResult;
    };

    const divide = () => {
    var divideResult = d1 / d2;
    setResult2(divideResult);
    return divideResult;
    };

    const sum = () => {
    var sumResult = s1 + s2;
    setResult3(sumResult);
    return sumResult;
    };
    const rest = () => {
    var restResult = r1 - r2;
    setResult4(restResult);
    return restResult;
    };

return (
  <React.Fragment>
    <div class="card" >
      <div class="card-body">
        <h5 class="card-title">OPERATIONS</h5>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Multiply</span>
          </div>
          <input type="number" id="m1" class="form-control" value={m1} onChange={event => setM1(event.target.value)} />
          <span class="input-group-text"> x </span>
          <input type="number" id="m2" class="form-control" value={m2} onChange={event => setM2(event.target.value)}/>
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={multiply}
            >
              GO
            </button>
          </div>
          <span class="input-group-text" id="result"> Total: </span>
          <input type="number" id="result1" class="form-control" value={result1} />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Divide</span>
          </div>
          <input type="number" id="d1" class="form-control" value={d1} onChange={event => setD1(event.target.value)} />
          <span class="input-group-text"> / </span>
          <input type="number" id="d2" class="form-control" value={d2} onChange={event => setD2(event.target.value)}/>
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={divide}
            >
              GO
            </button>
          </div>
          <span class="input-group-text" id="result2"> Total: </span>
          <input type="number" id="result2" class="form-control" value={result2} />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Sum</span>
          </div>
          <input type="number" id="s1" class="form-control" value={s1} onChange={event => setS1(+event.target.value)}/>
          <span class="input-group-text"> + </span>
          <input type="number" id="s2" class="form-control" value={s2} onChange={event => setS2(+event.target.value)}/>
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={sum}
            >
              GO
            </button>
          </div>
          <span class="input-group-text" id="result3"> Total:  </span>
          <input type="number" id="result3" class="form-control" value={result3} />
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">Rest</span>
          </div>
          <input type="number" id="r1" class="form-control" value={r1} onChange={event => setR1(event.target.value)}/>
          <span class="input-group-text"> - </span>
          <input type="number" id="r2" class="form-control" value={r2} onChange={event => setR2(event.target.value)}/>
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              onClick={rest}
            >
              GO
            </button>
          </div>
          <span class="input-group-text" id="result4"> Total:  </span>
          <input type="number" id="result4" class="form-control" value={result4} />
        </div>
      </div>
    </div>
  </React.Fragment> 
);
};
export default Pruebas;