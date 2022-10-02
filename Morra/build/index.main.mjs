// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1],
      19: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v547 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v548 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v548, v547],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:81:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v548, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v552, v553], secs: v555, time: v554, didSend: v73, from: v551 } = txn1;
      
      sim_r.txns.push({
        amt: v552,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v564 = stdlib.safeAdd(v554, v553);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v552, v553], secs: v555, time: v554, didSend: v73, from: v551 } = txn1;
  ;
  const v564 = stdlib.safeAdd(v554, v553);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v564],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v551, v552, v553, v564],
      evt_cnt: 0,
      funcNum: 2,
      lct: v554,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v890, time: v889, didSend: v492, from: v888 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v551,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v890, time: v889, didSend: v492, from: v888 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:77:35:application',
      fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:88:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v570, time: v569, didSend: v82, from: v568 } = txn2;
    const v572 = stdlib.add(v552, v552);
    ;
    let v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v574 = v569;
    let v581 = v572;
    
    let txn3 = txn2;
    while (await (async () => {
      const v589 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v589;})()) {
      const v596 = stdlib.safeAdd(v574, v553);
      const v600 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:96:48:application',
        fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v601 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:97:44:application',
        fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v602 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:99:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v603 = stdlib.digest([ctc0, ctc0], [v602, v600]);
      const v605 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:101:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v606 = stdlib.digest([ctc0, ctc0], [v605, v601]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v551, v552, v553, v568, v581, v596, v603],
        evt_cnt: 1,
        funcNum: 4,
        lct: v574,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:105:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v609], secs: v611, time: v610, didSend: v113, from: v608 } = txn4;
          
          ;
          const v619 = stdlib.safeAdd(v610, v553);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v596],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v551, v552, v553, v568, v581, v596],
          evt_cnt: 0,
          funcNum: 5,
          lct: v574,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v856, time: v855, didSend: v443, from: v854 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v568,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v856, time: v855, didSend: v443, from: v854 } = txn5;
        ;
        const v857 = stdlib.addressEq(v551, v854);
        const v858 = stdlib.addressEq(v568, v854);
        const v859 = v857 ? true : v858;
        stdlib.assert(v859, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:77:35:application',
          fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v609], secs: v611, time: v610, didSend: v113, from: v608 } = txn4;
        ;
        const v612 = stdlib.addressEq(v551, v608);
        stdlib.assert(v612, {
          at: './index.rsh:105:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v619 = stdlib.safeAdd(v610, v553);
        const txn5 = await (ctc.sendrecv({
          args: [v551, v552, v553, v568, v581, v609, v619, v606],
          evt_cnt: 1,
          funcNum: 6,
          lct: v610,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:109:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v622], secs: v624, time: v623, didSend: v119, from: v621 } = txn5;
            
            ;
            const v632 = stdlib.safeAdd(v623, v553);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v619],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v551, v552, v553, v568, v581, v609, v619],
            evt_cnt: 0,
            funcNum: 7,
            lct: v610,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v838, time: v837, didSend: v409, from: v836 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v568,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v838, time: v837, didSend: v409, from: v836 } = txn6;
          ;
          const v839 = stdlib.addressEq(v551, v836);
          const v840 = stdlib.addressEq(v568, v836);
          const v841 = v839 ? true : v840;
          stdlib.assert(v841, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:77:35:application',
            fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v622], secs: v624, time: v623, didSend: v119, from: v621 } = txn5;
          ;
          const v625 = stdlib.addressEq(v551, v621);
          stdlib.assert(v625, {
            at: './index.rsh:109:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v632 = stdlib.safeAdd(v623, v553);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v632],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v551, v552, v553, v568, v581, v609, v622, v632],
              evt_cnt: 0,
              funcNum: 9,
              lct: v623,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v820, time: v819, didSend: v375, from: v818 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v551,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v820, time: v819, didSend: v375, from: v818 } = txn7;
            ;
            const v821 = stdlib.addressEq(v551, v818);
            const v822 = stdlib.addressEq(v568, v818);
            const v823 = v821 ? true : v822;
            stdlib.assert(v823, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:77:35:application',
              fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:128:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v639], secs: v641, time: v640, didSend: v130, from: v638 } = txn6;
            ;
            const v642 = stdlib.addressEq(v568, v638);
            stdlib.assert(v642, {
              at: './index.rsh:127:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v649 = stdlib.safeAdd(v640, v553);
            const txn7 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v649],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v551, v552, v553, v568, v581, v609, v622, v639, v649],
                evt_cnt: 0,
                funcNum: 11,
                lct: v640,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v802, time: v801, didSend: v341, from: v800 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v551,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v802, time: v801, didSend: v341, from: v800 } = txn8;
              ;
              const v803 = stdlib.addressEq(v551, v800);
              const v804 = stdlib.addressEq(v568, v800);
              const v805 = v803 ? true : v804;
              stdlib.assert(v805, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:131:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:77:35:application',
                fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:131:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v652], secs: v654, time: v653, didSend: v136, from: v651 } = txn7;
              ;
              const v655 = stdlib.addressEq(v568, v651);
              stdlib.assert(v655, {
                at: './index.rsh:130:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v662 = stdlib.safeAdd(v653, v553);
              const txn8 = await (ctc.sendrecv({
                args: [v551, v552, v553, v568, v581, v609, v622, v639, v652, v662, v602, v600],
                evt_cnt: 2,
                funcNum: 12,
                lct: v653,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:141:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v667, v668], secs: v670, time: v669, didSend: v146, from: v666 } = txn8;
                  
                  ;
                  const v680 = stdlib.safeAdd(v669, v553);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v662],
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v551, v552, v553, v568, v581, v609, v622, v639, v652, v662],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v653,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v784, time: v783, didSend: v307, from: v782 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v568,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v784, time: v783, didSend: v307, from: v782 } = txn9;
                ;
                const v785 = stdlib.addressEq(v551, v782);
                const v786 = stdlib.addressEq(v568, v782);
                const v787 = v785 ? true : v786;
                stdlib.assert(v787, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:142:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc2, await interact.informTimeout(), {
                  at: './index.rsh:77:35:application',
                  fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:142:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v667, v668], secs: v670, time: v669, didSend: v146, from: v666 } = txn8;
                ;
                const v671 = stdlib.addressEq(v551, v666);
                stdlib.assert(v671, {
                  at: './index.rsh:141:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v672 = stdlib.digest([ctc0, ctc0], [v667, v668]);
                const v673 = stdlib.digestEq(v609, v672);
                stdlib.assert(v673, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:144:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v680 = stdlib.safeAdd(v669, v553);
                const txn9 = await (ctc.sendrecv({
                  args: [v551, v552, v553, v568, v581, v622, v639, v652, v668, v680, v605, v601],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v669,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:147:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v683, v684], secs: v686, time: v685, didSend: v156, from: v682 } = txn9;
                    
                    ;
                    const v696 = stdlib.safeAdd(v685, v553);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v680],
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v551, v552, v553, v568, v581, v622, v639, v652, v668, v680],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v669,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v766, time: v765, didSend: v273, from: v764 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v568,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v766, time: v765, didSend: v273, from: v764 } = txn10;
                  ;
                  const v767 = stdlib.addressEq(v551, v764);
                  const v768 = stdlib.addressEq(v568, v764);
                  const v769 = v767 ? true : v768;
                  stdlib.assert(v769, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc2, await interact.informTimeout(), {
                    at: './index.rsh:77:35:application',
                    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v683, v684], secs: v686, time: v685, didSend: v156, from: v682 } = txn9;
                  ;
                  const v687 = stdlib.addressEq(v551, v682);
                  stdlib.assert(v687, {
                    at: './index.rsh:147:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v688 = stdlib.digest([ctc0, ctc0], [v683, v684]);
                  const v689 = stdlib.digestEq(v622, v688);
                  stdlib.assert(v689, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:149:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v696 = stdlib.safeAdd(v685, v553);
                  const v700 = stdlib.safeAdd(v668, v639);
                  stdlib.protect(ctc2, await interact.seeWinning(v700), {
                    at: './index.rsh:155:30:application',
                    fs: ['at ./index.rsh:153:15:application call to [unknown function] (defined at: ./index.rsh:153:19:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn10 = await (ctc.sendrecv({
                    args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v696, v700],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v685,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:158:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v702], secs: v704, time: v703, didSend: v169, from: v701 } = txn10;
                      
                      ;
                      const v712 = stdlib.safeAdd(v703, v553);
                      sim_r.isHalt = false;
                      
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v696],
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v696],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v685,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v748, time: v747, didSend: v239, from: v746 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v568,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v748, time: v747, didSend: v239, from: v746 } = txn11;
                    ;
                    const v749 = stdlib.addressEq(v551, v746);
                    const v750 = stdlib.addressEq(v568, v746);
                    const v751 = v749 ? true : v750;
                    stdlib.assert(v751, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:159:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc2, await interact.informTimeout(), {
                      at: './index.rsh:77:35:application',
                      fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:159:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v702], secs: v704, time: v703, didSend: v169, from: v701 } = txn10;
                    ;
                    const v705 = stdlib.addressEq(v551, v701);
                    stdlib.assert(v705, {
                      at: './index.rsh:158:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    const v712 = stdlib.safeAdd(v703, v553);
                    const txn11 = await (ctc.recv({
                      didSend: false,
                      evt_cnt: 1,
                      funcNum: 18,
                      out_tys: [ctc0],
                      timeoutAt: ['time', v712],
                      waitIfNotPresent: false
                      }));
                    if (txn11.didTimeout) {
                      const txn12 = await (ctc.sendrecv({
                        args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v712],
                        evt_cnt: 0,
                        funcNum: 19,
                        lct: v703,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn12) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v730, time: v729, didSend: v205, from: v728 } = txn12;
                          
                          ;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v551,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          
                          return sim_r;
                          }),
                        soloSend: false,
                        timeoutAt: undefined /* mto */,
                        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v730, time: v729, didSend: v205, from: v728 } = txn12;
                      ;
                      const v731 = stdlib.addressEq(v551, v728);
                      const v732 = stdlib.addressEq(v568, v728);
                      const v733 = v731 ? true : v732;
                      stdlib.assert(v733, {
                        at: 'reach standard library:197:11:dot',
                        fs: ['at ./index.rsh:169:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Alice'
                        });
                      ;
                      stdlib.protect(ctc2, await interact.informTimeout(), {
                        at: './index.rsh:77:35:application',
                        fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:169:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'informTimeout',
                        who: 'Alice'
                        });
                      
                      return;
                      
                      }
                    else {
                      const {data: [v718], secs: v720, time: v719, didSend: v179, from: v717 } = txn11;
                      ;
                      const v721 = stdlib.addressEq(v568, v717);
                      stdlib.assert(v721, {
                        at: './index.rsh:168:11:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Alice'
                        });
                      let v722;
                      const v723 = stdlib.eq(v684, v652);
                      if (v723) {
                        v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v724 = stdlib.safeAdd(v668, v639);
                        const v725 = stdlib.eq(v724, v684);
                        if (v725) {
                          v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v727 = stdlib.eq(v724, v652);
                          if (v727) {
                            v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv573 = v722;
                      const cv574 = v719;
                      const cv581 = v581;
                      
                      v573 = cv573;
                      v574 = cv574;
                      v581 = cv581;
                      
                      txn3 = txn11;
                      continue;}
                    
                    }
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v872 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v875 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '2'), v552);
    const v877 = v872 ? v551 : v568;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v573), {
      at: './index.rsh:182:28:application',
      fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v552, v553], secs: v555, time: v554, didSend: v73, from: v551 } = txn1;
  ;
  const v564 = stdlib.safeAdd(v554, v553);
  stdlib.protect(ctc1, await interact.acceptWager(v552), {
    at: './index.rsh:86:29:application',
    fs: ['at ./index.rsh:85:13:application call to [unknown function] (defined at: ./index.rsh:85:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v551, v552, v553, v564],
    evt_cnt: 0,
    funcNum: 1,
    lct: v554,
    onlyIf: true,
    out_tys: [],
    pay: [v552, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v570, time: v569, didSend: v82, from: v568 } = txn2;
      
      const v572 = stdlib.add(v552, v552);
      sim_r.txns.push({
        amt: v552,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v574 = v569;
      const v581 = v572;
      
      if (await (async () => {
        const v589 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v589;})()) {
        const v596 = stdlib.safeAdd(v574, v553);
        sim_r.isHalt = false;
        }
      else {
        const v872 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v875 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '2'), v552);
        const v877 = v872 ? v551 : v568;
        sim_r.txns.push({
          kind: 'from',
          to: v877,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v564],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v551, v552, v553, v564],
      evt_cnt: 0,
      funcNum: 2,
      lct: v554,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v890, time: v889, didSend: v492, from: v888 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v551,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v890, time: v889, didSend: v492, from: v888 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:35:application',
      fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:88:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v570, time: v569, didSend: v82, from: v568 } = txn2;
    const v572 = stdlib.add(v552, v552);
    ;
    let v573 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v574 = v569;
    let v581 = v572;
    
    let txn3 = txn2;
    while (await (async () => {
      const v589 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v589;})()) {
      const v596 = stdlib.safeAdd(v574, v553);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v596],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v551, v552, v553, v568, v581, v596],
          evt_cnt: 0,
          funcNum: 5,
          lct: v574,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v856, time: v855, didSend: v443, from: v854 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v568,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v856, time: v855, didSend: v443, from: v854 } = txn5;
        ;
        const v857 = stdlib.addressEq(v551, v854);
        const v858 = stdlib.addressEq(v568, v854);
        const v859 = v857 ? true : v858;
        stdlib.assert(v859, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:77:35:application',
          fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v609], secs: v611, time: v610, didSend: v113, from: v608 } = txn4;
        ;
        const v612 = stdlib.addressEq(v551, v608);
        stdlib.assert(v612, {
          at: './index.rsh:105:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v619 = stdlib.safeAdd(v610, v553);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v619],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v551, v552, v553, v568, v581, v609, v619],
            evt_cnt: 0,
            funcNum: 7,
            lct: v610,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v838, time: v837, didSend: v409, from: v836 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v568,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v838, time: v837, didSend: v409, from: v836 } = txn6;
          ;
          const v839 = stdlib.addressEq(v551, v836);
          const v840 = stdlib.addressEq(v568, v836);
          const v841 = v839 ? true : v840;
          stdlib.assert(v841, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:77:35:application',
            fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v622], secs: v624, time: v623, didSend: v119, from: v621 } = txn5;
          ;
          const v625 = stdlib.addressEq(v551, v621);
          stdlib.assert(v625, {
            at: './index.rsh:109:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v632 = stdlib.safeAdd(v623, v553);
          const v636 = stdlib.protect(ctc0, await interact.getFingers(), {
            at: './index.rsh:119:48:application',
            fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
            msg: 'getFingers',
            who: 'Bob'
            });
          const v637 = stdlib.protect(ctc0, await interact.getGuess(), {
            at: './index.rsh:120:44:application',
            fs: ['at ./index.rsh:117:15:application call to [unknown function] (defined at: ./index.rsh:117:19:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn6 = await (ctc.sendrecv({
            args: [v551, v552, v553, v568, v581, v609, v622, v632, v636],
            evt_cnt: 1,
            funcNum: 8,
            lct: v623,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:127:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v639], secs: v641, time: v640, didSend: v130, from: v638 } = txn6;
              
              ;
              const v649 = stdlib.safeAdd(v640, v553);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v632],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v551, v552, v553, v568, v581, v609, v622, v632],
              evt_cnt: 0,
              funcNum: 9,
              lct: v623,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v820, time: v819, didSend: v375, from: v818 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v551,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v820, time: v819, didSend: v375, from: v818 } = txn7;
            ;
            const v821 = stdlib.addressEq(v551, v818);
            const v822 = stdlib.addressEq(v568, v818);
            const v823 = v821 ? true : v822;
            stdlib.assert(v823, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:128:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:77:35:application',
              fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:128:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v639], secs: v641, time: v640, didSend: v130, from: v638 } = txn6;
            ;
            const v642 = stdlib.addressEq(v568, v638);
            stdlib.assert(v642, {
              at: './index.rsh:127:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v649 = stdlib.safeAdd(v640, v553);
            const txn7 = await (ctc.sendrecv({
              args: [v551, v552, v553, v568, v581, v609, v622, v639, v649, v637],
              evt_cnt: 1,
              funcNum: 10,
              lct: v640,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:130:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v652], secs: v654, time: v653, didSend: v136, from: v651 } = txn7;
                
                ;
                const v662 = stdlib.safeAdd(v653, v553);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v649],
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn7.didTimeout) {
              const txn8 = await (ctc.sendrecv({
                args: [v551, v552, v553, v568, v581, v609, v622, v639, v649],
                evt_cnt: 0,
                funcNum: 11,
                lct: v640,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn8) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v802, time: v801, didSend: v341, from: v800 } = txn8;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v551,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v802, time: v801, didSend: v341, from: v800 } = txn8;
              ;
              const v803 = stdlib.addressEq(v551, v800);
              const v804 = stdlib.addressEq(v568, v800);
              const v805 = v803 ? true : v804;
              stdlib.assert(v805, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:131:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:77:35:application',
                fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:131:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v652], secs: v654, time: v653, didSend: v136, from: v651 } = txn7;
              ;
              const v655 = stdlib.addressEq(v568, v651);
              stdlib.assert(v655, {
                at: './index.rsh:130:11:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v662 = stdlib.safeAdd(v653, v553);
              const txn8 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v662],
                waitIfNotPresent: false
                }));
              if (txn8.didTimeout) {
                const txn9 = await (ctc.sendrecv({
                  args: [v551, v552, v553, v568, v581, v609, v622, v639, v652, v662],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v653,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn9) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v784, time: v783, didSend: v307, from: v782 } = txn9;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v568,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v784, time: v783, didSend: v307, from: v782 } = txn9;
                ;
                const v785 = stdlib.addressEq(v551, v782);
                const v786 = stdlib.addressEq(v568, v782);
                const v787 = v785 ? true : v786;
                stdlib.assert(v787, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:142:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:77:35:application',
                  fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:142:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v667, v668], secs: v670, time: v669, didSend: v146, from: v666 } = txn8;
                ;
                const v671 = stdlib.addressEq(v551, v666);
                stdlib.assert(v671, {
                  at: './index.rsh:141:11:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v672 = stdlib.digest([ctc0, ctc0], [v667, v668]);
                const v673 = stdlib.digestEq(v609, v672);
                stdlib.assert(v673, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:144:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v680 = stdlib.safeAdd(v669, v553);
                const txn9 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v680],
                  waitIfNotPresent: false
                  }));
                if (txn9.didTimeout) {
                  const txn10 = await (ctc.sendrecv({
                    args: [v551, v552, v553, v568, v581, v622, v639, v652, v668, v680],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v669,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn10) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v766, time: v765, didSend: v273, from: v764 } = txn10;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v568,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v766, time: v765, didSend: v273, from: v764 } = txn10;
                  ;
                  const v767 = stdlib.addressEq(v551, v764);
                  const v768 = stdlib.addressEq(v568, v764);
                  const v769 = v767 ? true : v768;
                  stdlib.assert(v769, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:77:35:application',
                    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v683, v684], secs: v686, time: v685, didSend: v156, from: v682 } = txn9;
                  ;
                  const v687 = stdlib.addressEq(v551, v682);
                  stdlib.assert(v687, {
                    at: './index.rsh:147:11:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v688 = stdlib.digest([ctc0, ctc0], [v683, v684]);
                  const v689 = stdlib.digestEq(v622, v688);
                  stdlib.assert(v689, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:149:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v696 = stdlib.safeAdd(v685, v553);
                  const txn10 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v696],
                    waitIfNotPresent: false
                    }));
                  if (txn10.didTimeout) {
                    const txn11 = await (ctc.sendrecv({
                      args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v696],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v685,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v748, time: v747, didSend: v239, from: v746 } = txn11;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v568,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v748, time: v747, didSend: v239, from: v746 } = txn11;
                    ;
                    const v749 = stdlib.addressEq(v551, v746);
                    const v750 = stdlib.addressEq(v568, v746);
                    const v751 = v749 ? true : v750;
                    stdlib.assert(v751, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:159:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:77:35:application',
                      fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:159:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v702], secs: v704, time: v703, didSend: v169, from: v701 } = txn10;
                    ;
                    const v705 = stdlib.addressEq(v551, v701);
                    stdlib.assert(v705, {
                      at: './index.rsh:158:11:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    const v712 = stdlib.safeAdd(v703, v553);
                    const v716 = stdlib.safeAdd(v668, v639);
                    stdlib.protect(ctc1, await interact.seeWinning(v716), {
                      at: './index.rsh:165:30:application',
                      fs: ['at ./index.rsh:163:15:application call to [unknown function] (defined at: ./index.rsh:163:19:function exp)'],
                      msg: 'seeWinning',
                      who: 'Bob'
                      });
                    
                    const txn11 = await (ctc.sendrecv({
                      args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v712, v716],
                      evt_cnt: 1,
                      funcNum: 18,
                      lct: v703,
                      onlyIf: true,
                      out_tys: [ctc0],
                      pay: [stdlib.checkedBigNumberify('./index.rsh:168:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn11) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [v718], secs: v720, time: v719, didSend: v179, from: v717 } = txn11;
                        
                        ;
                        let v722;
                        const v723 = stdlib.eq(v684, v652);
                        if (v723) {
                          v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        else {
                          const v724 = stdlib.safeAdd(v668, v639);
                          const v725 = stdlib.eq(v724, v684);
                          if (v725) {
                            v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                            }
                          else {
                            const v727 = stdlib.eq(v724, v652);
                            if (v727) {
                              v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                              }
                            else {
                              v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                              }
                            }
                          }
                        const cv573 = v722;
                        const cv574 = v719;
                        const cv581 = v581;
                        
                        await (async () => {
                          const v573 = cv573;
                          const v574 = cv574;
                          const v581 = cv581;
                          
                          if (await (async () => {
                            const v589 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                            
                            return v589;})()) {
                            const v596 = stdlib.safeAdd(v574, v553);
                            sim_r.isHalt = false;
                            }
                          else {
                            const v872 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                            const v875 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '2'), v552);
                            const v877 = v872 ? v551 : v568;
                            sim_r.txns.push({
                              kind: 'from',
                              to: v877,
                              tok: undefined /* Nothing */
                              });
                            sim_r.txns.push({
                              kind: 'halt',
                              tok: undefined /* Nothing */
                              })
                            sim_r.isHalt = true;
                            }})();
                        return sim_r;
                        }),
                      soloSend: true,
                      timeoutAt: ['time', v712],
                      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    if (txn11.didTimeout) {
                      const txn12 = await (ctc.sendrecv({
                        args: [v551, v552, v553, v568, v581, v639, v652, v668, v684, v712],
                        evt_cnt: 0,
                        funcNum: 19,
                        lct: v703,
                        onlyIf: true,
                        out_tys: [],
                        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                        sim_p: (async (txn12) => {
                          const sim_r = { txns: [], mapRefs: [], maps: [] };
                          let sim_txn_ctr = stdlib.UInt_max;
                          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                          
                          
                          const {data: [], secs: v730, time: v729, didSend: v205, from: v728 } = txn12;
                          
                          ;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v551,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          
                          return sim_r;
                          }),
                        soloSend: false,
                        timeoutAt: undefined /* mto */,
                        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                        waitIfNotPresent: false
                        }));
                      const {data: [], secs: v730, time: v729, didSend: v205, from: v728 } = txn12;
                      ;
                      const v731 = stdlib.addressEq(v551, v728);
                      const v732 = stdlib.addressEq(v568, v728);
                      const v733 = v731 ? true : v732;
                      stdlib.assert(v733, {
                        at: 'reach standard library:197:11:dot',
                        fs: ['at ./index.rsh:169:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'sender correct',
                        who: 'Bob'
                        });
                      ;
                      stdlib.protect(ctc1, await interact.informTimeout(), {
                        at: './index.rsh:77:35:application',
                        fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:75:34:function exp)', 'at ./index.rsh:169:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                        msg: 'informTimeout',
                        who: 'Bob'
                        });
                      
                      return;
                      
                      }
                    else {
                      const {data: [v718], secs: v720, time: v719, didSend: v179, from: v717 } = txn11;
                      ;
                      const v721 = stdlib.addressEq(v568, v717);
                      stdlib.assert(v721, {
                        at: './index.rsh:168:11:dot',
                        fs: [],
                        msg: 'sender correct',
                        who: 'Bob'
                        });
                      let v722;
                      const v723 = stdlib.eq(v684, v652);
                      if (v723) {
                        v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v724 = stdlib.safeAdd(v668, v639);
                        const v725 = stdlib.eq(v724, v684);
                        if (v725) {
                          v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v727 = stdlib.eq(v724, v652);
                          if (v727) {
                            v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v722 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv573 = v722;
                      const cv574 = v719;
                      const cv581 = v581;
                      
                      v573 = cv573;
                      v574 = cv574;
                      v581 = cv581;
                      
                      txn3 = txn11;
                      continue;}
                    
                    }
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v872 = stdlib.eq(v573, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v875 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:178:16:decimal', stdlib.UInt_max, '2'), v552);
    const v877 = v872 ? v551 : v568;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v573), {
      at: './index.rsh:182:28:application',
      fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:23:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAZAAFQICh4CBMCBQ8RWA2YAQsHCaABYHBokAGoATAmAwEAAQEAIjUAMRhBChEqZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEKDEAFYkkhCgxAAmhJIQsMQAFXSYESDEAA/UkhBwxAAFYhBxJEIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gAQH5y8TsDIGNAMhBVsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IJIEghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUlXMCA1/yETWzX+IRRbNf1JNQUXNfyABDtNOrg0/BZQsDIGNAMhBVsMRDT/MQASRDT9NP4SQQAGIzX7QgAsNAMhFVs0AyEMWwhJNfo0/RJBAAchCDX7QgARNPo0/hJBAAYiNftCAAMjNfs0A1cAIDQDJVs0AyEEWzT/NPsyBjQDJFtCCB5IIQs0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gAQAgdKOsDIGNAMhBVsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IILUmBEAxAALBIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8lWzX+IQRbNf1XMCA1/CRbNfshDFs1+iETWzX5IRVbNfghFFs190k1BRc19oAEfoUQcTT2FlCwMgY0AyEFWwxENP8xABJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPcWUDT1FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIHkkghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABEZHjF6wMgY0AyEWWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgcjSYEMDEAB6kkhDQxAASBJgQ4MQADGSCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNfshBVs1+oGAAVs1+YGIAVs1+Ek1BUkiWzX3IQZbNfaABL2u59U09xZQNPYWULAyBjQDIRZbDEQ0/zEAEkQ0A1dYIDT3FjT2FlABEkQyBjT9CDX1NP80/hZQNP0WUDT8UDT7FlA0+hZQNPkWUDT4FlA09hZQNPUWUChLAVcAf2cpSwFXfwFnSCELNQEyBjUCQgZkSCENNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEIp+XA7AyBjQDIRdbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCBfVIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1d4IDX6IQ5bNfkhEls1+Ek1BUkiWzX3IQZbNfaABMOqkME09xZQNPYWULAyBjQDIRdbDEQ0/zEAEkQ0A1dYIDT3FjT2FlABEkQyBjT9CDX1NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUDT2FlA09RZQKEsBVwB/ZylLAVd/GWdIIQo1ATIGNQJCBU5JIQ8MQABTSCEPNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE49k2NbAyBjQDIRJbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCBNhIIQ80ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNfkhDls1+Ek1BRc194AEp4vCCzT3FlCwMgY0AyESWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQ01ATIGNQJCBExJIQkMQAJESSEQDEABU0khBgxAAPlJIREMQABTSCERNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEogVmjrAyBjQDIQ5bD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA8FIIRE0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNflJNQUXNfiABC/a6R00+BZQsDIGNAMhDlsMRDT8MQASRDIGNP0INfc0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQ81ATIGNQJCAz5IIRA0ARJENARJIhJMNAISEUQoZClkUEk1A1cwIDX/gATiG7OpsDIGNAMhBVsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0ICz0mBBgxAAJNIIRA0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpJNQU1+YAEae47PjT5ULAyBjQDIQVbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIRE1ATIGNQJCAlFIIQk0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5UkhCAxAAM9JgQQMQACISCEJNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDFsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghEDUBMgY1AkIBayEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIRhbD0SxIrIBNAMlW7III7IQNANXACCyB7NCAQ9JIwxAAEdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEmouRdLAyBjQDIRhbDEQ0/4gBSDQDVwAgNP80AyEEWzEAIzIGNP9JCEIAYEiBoI0GiAEoIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQZbNf6ABKzRH8M0/xZQNP4WULA0/4gA9zIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAfjX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEJNQEyBjUCQgA6sSKyASEINPoLsggjshA0/DT5NP0hCBJNsgezQgAAMRkhCRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v552",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v553",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v552",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v553",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v667",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v668",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v683",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v684",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v702",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v718",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e19",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v609",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v622",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v652",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v667",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v668",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v683",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v684",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v702",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v718",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T31",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m19",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v609",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v622",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620032e7380380620032e78339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612f6a806200037d6000396000f3fe6080604052600436106101225760003560e01c80638b9fadc8116100a5578063ab53f2c61161006c578063ab53f2c61461025b578063b04759241461027e578063b608682e14610291578063bf2c5b24146102a4578063de736998146102b7578063f37e1b9b146102ca57005b80638b9fadc8146101fc5780638e3147691461020f578063980b6eac146102225780639f25181014610235578063a209ad4e1461024857005b80635471c5a8116100e95780635471c5a81461019b57806379b8ead7146101ae5780637eea518c146101c157806383230757146101d45780638acccf82146101e957005b80631e93b0f11461012b57806329bdceb91461014f5780632c10a159146101625780633a31ddbd146101755780633a3e43b01461018857005b3661012957005b005b34801561013757600080fd5b506003545b6040519081526020015b60405180910390f35b61012961015d3660046128ad565b6102dd565b6101296101703660046128ad565b610598565b6101296101833660046128ad565b610727565b6101296101963660046128e2565b6108de565b6101296101a93660046128ad565b610b69565b6101296101bc3660046128e2565b610cc4565b6101296101cf3660046128ad565b610f4f565b3480156101e057600080fd5b5060015461013c565b6101296101f73660046128ad565b6110b2565b61012961020a3660046128ad565b6112e3565b61012961021d3660046128ad565b61147b565b6101296102303660046128ad565b6115d5565b6101296102433660046128ad565b611847565b6101296102563660046128ad565b6119a2565b34801561026757600080fd5b50610270611be5565b6040516101469291906128fe565b61012961028c3660046128ad565b611c82565b61012961029f3660046128ad565b611ddd565b6101296102b23660046128ad565b612019565b6101296102c53660046128ad565b612173565b6101296102d83660046128ad565b6122cd565b6102ed6009600054146026612507565b6103078135158061030057506001548235145b6027612507565b6000808055600280546103199061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546103459061295b565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa9190612a16565b90506103c26040518060200160405280600081525090565b6103d38260e0015143106028612507565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de89683384604051610404929190612ac2565b60405180910390a161041834156024612507565b6060820151610433906001600160a01b031633146025612507565b61044143836040015161252d565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b60005543600155905161056d9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b60405160208183030381529060405260029080519060200190610591929190612766565b5050505050565b6105a86001600054146009612507565b6105c2813515806105bb57506001548235145b600a612507565b6000808055600280546105d49061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546106009061295b565b801561064d5780601f106106225761010080835404028352916020019161064d565b820191906000526020600020905b81548152906001019060200180831161063057829003601f168201915b50505050508060200190518101906106659190612ae9565b905061067881606001514310600b612507565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516106a9929190612b62565b60405180910390a16106c2816020015134146008612507565b6106ca6127ea565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251800160208201516040015261072281612580565b505050565b610737600f60005414604b612507565b6107518135158061074a57506001548235145b604c612507565b6000808055600280546107639061295b565b80601f016020809104026020016040519081016040528092919081815260200182805461078f9061295b565b80156107dc5780601f106107b1576101008083540402835291602001916107dc565b820191906000526020600020905b8154815290600101906020018083116107bf57829003601f168201915b50505050508060200190518101906107f49190612c32565b9050610809816101200151431015604d612507565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b338360405161083a929190612b62565b60405180910390a161084e34156049612507565b8051610882906001600160a01b031633146108785760608201516001600160a01b0316331461087b565b60015b604a612507565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156108c3573d6000803e3d6000fd5b50600080805560018190556108da90600290612843565b5050565b6108ee600f600054146046612507565b6109088135158061090157506001548235145b6047612507565b60008080556002805461091a9061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546109469061295b565b80156109935780601f1061096857610100808354040283529160200191610993565b820191906000526020600020905b81548152906001019060200180831161097657829003601f168201915b50505050508060200190518101906109ab9190612c32565b90506109c36040518060200160405280600081525090565b6109d582610120015143106048612507565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d9973384604051610a06929190612c4f565b60405180910390a1610a1a34156043612507565b8151610a32906001600160a01b031633146044612507565b60408051610a7e91610a5891602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a00151146045612507565b610a8c43836040015161252d565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152601160005543600155905161056d91839101612cfb565b610b79600d600054146040612507565b610b9381351580610b8c57506001548235145b6041612507565b600080805560028054610ba59061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd19061295b565b8015610c1e5780601f10610bf357610100808354040283529160200191610c1e565b820191906000526020600020905b815481529060010190602001808311610c0157829003601f168201915b5050505050806020019051810190610c369190612c32565b9050610c4b8161012001514310156042612507565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c7c929190612b62565b60405180910390a1610c903415603e612507565b8051610882906001600160a01b03163314610cba5760608201516001600160a01b03163314610cbd565b60015b603f612507565b610cd4600d60005414603b612507565b610cee81351580610ce757506001548235145b603c612507565b600080805560028054610d009061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d2c9061295b565b8015610d795780601f10610d4e57610100808354040283529160200191610d79565b820191906000526020600020905b815481529060010190602001808311610d5c57829003601f168201915b5050505050806020019051810190610d919190612c32565b9050610da96040518060200160405280600081525090565b610dbb8261012001514310603d612507565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610dec929190612c4f565b60405180910390a1610e0034156038612507565b8151610e18906001600160a01b031633146039612507565b60408051610e6491610e3e91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a612507565b610e7243836040015161252d565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f60005543600155905161056d91839101612cfb565b610f5f600160005414600d612507565b610f7981351580610f7257506001548235145b600e612507565b600080805560028054610f8b9061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054610fb79061295b565b80156110045780601f10610fd957610100808354040283529160200191611004565b820191906000526020600020905b815481529060010190602001808311610fe757829003601f168201915b505050505080602001905181019061101c9190612ae9565b90506110308160600151431015600f612507565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503383604051611061929190612b62565b60405180910390a16110753415600c612507565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108c3573d6000803e3d6000fd5b6110c2601360005414605a612507565b6110dc813515806110d557506001548235145b605b612507565b6000808055600280546110ee9061295b565b80601f016020809104026020016040519081016040528092919081815260200182805461111a9061295b565b80156111675780601f1061113c57610100808354040283529160200191611167565b820191906000526020600020905b81548152906001019060200180831161114a57829003601f168201915b505050505080602001905181019061117f9190612c32565b905061119e604051806040016040528060008152602001600081525090565b6111b08261012001514310605c612507565b7f3235f0e7edde3f00b94a3b6a2ebcd3d06174472fccd4a48a200cdba1c3becab033846040516111e1929190612ac2565b60405180910390a16111f534156058612507565b6060820151611210906001600160a01b031633146059612507565b8160c00151826101000151141561122a5760018152611276565b61123c8260e001518360a0015161252d565b6020820181905261010083015114156112585760028152611276565b8160c00151816020015114156112715760008152611276565b600181525b61127e6127ea565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526112dd81612580565b50505050565b6112f3600b600054146035612507565b61130d8135158061130657506001548235145b6036612507565b60008080556002805461131f9061295b565b80601f016020809104026020016040519081016040528092919081815260200182805461134b9061295b565b80156113985780601f1061136d57610100808354040283529160200191611398565b820191906000526020600020905b81548152906001019060200180831161137b57829003601f168201915b50505050508060200190518101906113b09190612d0a565b90506113c58161010001514310156037612507565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55033836040516113f6929190612b62565b60405180910390a161140a34156033612507565b805161143e906001600160a01b031633146114345760608201516001600160a01b03163314611437565b60015b6034612507565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108c3573d6000803e3d6000fd5b61148b6005600054146017612507565b6114a58135158061149e57506001548235145b6018612507565b6000808055600280546114b79061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546114e39061295b565b80156115305780601f1061150557610100808354040283529160200191611530565b820191906000526020600020905b81548152906001019060200180831161151357829003601f168201915b50505050508060200190518101906115489190612d93565b905061155c8160a001514310156019612507565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161158d929190612b62565b60405180910390a16115a134156015612507565b8051610882906001600160a01b031633146115cb5760608201516001600160a01b031633146115ce565b60015b6016612507565b6115e5600760005414601c612507565b6115ff813515806115f857506001548235145b601d612507565b6000808055600280546116119061295b565b80601f016020809104026020016040519081016040528092919081815260200182805461163d9061295b565b801561168a5780601f1061165f5761010080835404028352916020019161168a565b820191906000526020600020905b81548152906001019060200180831161166d57829003601f168201915b50505050508060200190518101906116a29190612e27565b90506116ba6040518060200160405280600081525090565b6116cb8260c001514310601e612507565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516116fc929190612ac2565b60405180910390a16117103415601a612507565b8151611728906001600160a01b03163314601b612507565b61173643836040015161252d565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e0840152600960005543600155905161056d9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6118576011600054146055612507565b6118718135158061186a57506001548235145b6056612507565b6000808055600280546118839061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546118af9061295b565b80156118fc5780601f106118d1576101008083540402835291602001916118fc565b820191906000526020600020905b8154815290600101906020018083116118df57829003601f168201915b50505050508060200190518101906119149190612c32565b90506119298161012001514310156057612507565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed235338360405161195a929190612b62565b60405180910390a161196e34156053612507565b8051610882906001600160a01b031633146119985760608201516001600160a01b0316331461199b565b60015b6054612507565b6119b26005600054146012612507565b6119cc813515806119c557506001548235145b6013612507565b6000808055600280546119de9061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054611a0a9061295b565b8015611a575780601f10611a2c57610100808354040283529160200191611a57565b820191906000526020600020905b815481529060010190602001808311611a3a57829003601f168201915b5050505050806020019051810190611a6f9190612d93565b9050611a876040518060200160405280600081525090565b611a988260a0015143106014612507565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051611ac9929190612ac2565b60405180910390a1611add34156010612507565b8151611af5906001600160a01b031633146011612507565b611b0343836040015161252d565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e08201526101000161056d565b600060606000546002808054611bfa9061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054611c269061295b565b8015611c735780601f10611c4857610100808354040283529160200191611c73565b820191906000526020600020905b815481529060010190602001808311611c5657829003601f168201915b50505050509050915091509091565b611c92601360005414605f612507565b611cac81351580611ca557506001548235145b6060612507565b600080805560028054611cbe9061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054611cea9061295b565b8015611d375780601f10611d0c57610100808354040283529160200191611d37565b820191906000526020600020905b815481529060010190602001808311611d1a57829003601f168201915b5050505050806020019051810190611d4f9190612c32565b9050611d648161012001514310156061612507565b7f492f6c86d056da1348678f7aea844a06f3e1e163bb0571aa6c33fa50dab156433383604051611d95929190612b62565b60405180910390a1611da93415605d612507565b805161143e906001600160a01b03163314611dd35760608201516001600160a01b03163314611dd6565b60015b605e612507565b611ded600b600054146030612507565b611e0781351580611e0057506001548235145b6031612507565b600080805560028054611e199061295b565b80601f0160208091040260200160405190810160405280929190818152602001828054611e459061295b565b8015611e925780601f10611e6757610100808354040283529160200191611e92565b820191906000526020600020905b815481529060010190602001808311611e7557829003601f168201915b5050505050806020019051810190611eaa9190612d0a565b9050611ec26040518060200160405280600081525090565b611ed482610100015143106032612507565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611f05929190612ac2565b60405180910390a1611f193415602e612507565b6060820151611f34906001600160a01b03163314602f612507565b611f4243836040015161252d565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d60005543600155905161056d91839101612cfb565b6120296007600054146021612507565b6120438135158061203c57506001548235145b6022612507565b6000808055600280546120559061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546120819061295b565b80156120ce5780601f106120a3576101008083540402835291602001916120ce565b820191906000526020600020905b8154815290600101906020018083116120b157829003601f168201915b50505050508060200190518101906120e69190612e27565b90506120fa8160c001514310156023612507565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb338360405161212b929190612b62565b60405180910390a161213f3415601f612507565b8051610882906001600160a01b031633146121695760608201516001600160a01b0316331461216c565b60015b6020612507565b612183600960005414602b612507565b61219d8135158061219657506001548235145b602c612507565b6000808055600280546121af9061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546121db9061295b565b80156122285780601f106121fd57610100808354040283529160200191612228565b820191906000526020600020905b81548152906001019060200180831161220b57829003601f168201915b50505050508060200190518101906122409190612a16565b90506122548160e00151431015602d612507565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051612285929190612b62565b60405180910390a161229934156029612507565b805161143e906001600160a01b031633146122c35760608201516001600160a01b031633146122c6565b60015b602a612507565b6122dd6011600054146050612507565b6122f7813515806122f057506001548235145b6051612507565b6000808055600280546123099061295b565b80601f01602080910402602001604051908101604052809291908181526020018280546123359061295b565b80156123825780601f1061235757610100808354040283529160200191612382565b820191906000526020600020905b81548152906001019060200180831161236557829003601f168201915b505050505080602001905181019061239a9190612c32565b90506123b26040518060200160405280600081525090565b6123c482610120015143106052612507565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee433846040516123f5929190612ac2565b60405180910390a16124093415604e612507565b8151612421906001600160a01b03163314604f612507565b61242f43836040015161252d565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e0808601519084015261010080860151908401528351610120840152601360005543600155905161056d91839101612cfb565b816108da5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261253a8382612edb565b915081101561257a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612524565b92915050565b604080516020810190915260008152602082015151600114156126a4576125b782602001516020015183600001516040015161252d565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906112dd929190612766565b6020820151516002146126bc578151606001516126c0565b8151515b6001600160a01b03166108fc6126df6002856000015160200151612707565b6040518115909202916000818181858888f193505050501580156108c3573d6000803e3d6000fd5b600081158061272b5750828261271d8183612ef3565b92506127299083612f12565b145b61257a5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612524565b8280546127729061295b565b90600052602060002090601f01602090048101928261279457600085556127da565b82601f106127ad57805160ff19168380011785556127da565b828001600101855582156127da579182015b828111156127da5782518255916020019190600101906127bf565b506127e6929150612880565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161283e60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461284f9061295b565b6000825580601f1061285f575050565b601f01602090049060005260206000209081019061287d9190612880565b50565b5b808211156127e65760008155600101612881565b6000604082840312156128a757600080fd5b50919050565b6000604082840312156128bf57600080fd5b6128c98383612895565b9392505050565b6000606082840312156128a757600080fd5b6000606082840312156128f457600080fd5b6128c983836128d0565b82815260006020604081840152835180604085015260005b8181101561293257858101830151858201606001528201612916565b81811115612944576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061296f57607f821691505b602082108114156128a757634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156129c257634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156129c257634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114612a1157600080fd5b919050565b6000610100808385031215612a2a57600080fd5b6040519081019067ffffffffffffffff82118183101715612a5b57634e487b7160e01b600052604160045260246000fd5b81604052612a68846129fa565b81526020840151602082015260408401516040820152612a8a606085016129fa565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152606081016128c9602083018480358252602090810135910152565b600060808284031215612afb57600080fd5b6040516080810181811067ffffffffffffffff82111715612b2c57634e487b7160e01b600052604160045260246000fd5b604052612b38836129fa565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214612b9057600080fd5b80604085015250509392505050565b60006101408284031215612bb257600080fd5b612bba612990565b9050612bc5826129fa565b81526020820151602082015260408201516040820152612be7606083016129fa565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b60006101408284031215612c4557600080fd5b6128c98383612b9f565b6001600160a01b0383168152608081016128c960208301848035825260208082013590830152604090810135910152565b80516001600160a01b0316825260208101516020830152604081015160408301526060810151612cbb60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b610140810161257a8284612c80565b60006101208284031215612d1d57600080fd5b612d256129c8565b612d2e836129fa565b81526020830151602082015260408301516040820152612d50606084016129fa565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c08284031215612da557600080fd5b60405160c0810181811067ffffffffffffffff82111715612dd657634e487b7160e01b600052604160045260246000fd5b604052612de2836129fa565b81526020830151602082015260408301516040820152612e04606084016129fa565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612e3957600080fd5b60405160e0810181811067ffffffffffffffff82111715612e6a57634e487b7160e01b600052604160045260246000fd5b604052612e76836129fa565b81526020830151602082015260408301516040820152612e98606084016129fa565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612eee57612eee612ec5565b500190565b6000816000190483118215151615612f0d57612f0d612ec5565b500290565b600082612f2f57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220b6221d8ddfc878369cc6313b573c3a1372ffb2e61ec1ba0ef323d603f84e6ce264736f6c634300080c0033`,
  BytecodeLen: 13031,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:83:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:179:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:94:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:106:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:107:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:110:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:112:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:128:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:129:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:131:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:134:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:145:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:148:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:151:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:159:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:161:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:169:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
