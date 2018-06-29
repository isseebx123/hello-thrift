import React, {Component} from 'react';
// import ttypes from './gen-nodejs/tutorial_types';
import assert from 'assert';

const ArithmeticService = require('./gen-nodejs/ArithmeticService');
const Thrift = require('thrift');

const port = 9090;
var transport = new Thrift.Transport('http://localhost:' + port + '/service'); // new Thrift.Transport("/thrift/service/tutorial/");
var protocol = new Thrift.Protocol(transport);
var client = new CalculatorClient(protocol);

var work = new ttypes.Work();

const Client = () => {
  work.num1 = 10;
  work.num2 = 15;
  work.op = 'add';

  try {
    result = client.add(1, work);
    console.log(result)

  } catch (ouch) {
    console.log('fail')
  }
}


export default Client;
// var transport = Thrift.TBufferedTransport;
// var protocol = Thrift.TBinaryProtocol;
//
// const Client = () => {
//   var connection = Thrift.createConnection("localhost", 9090, {
//     transport: transport,
//     protocol: protocol
//   });
//
//   connection.on('error', function (err) {
//     assert(false, err);
//   });
//
//   var client = Thrift.createClient(ArithmeticService, connection);
//   //
//   client.add(1, 1, function (err, response) {
//     console.log("1+1=" + response);
//     connection.end();
//     return (<span>resopnse</span>);
//   });
// }
//
// export default Client;
// Create a ArithmeticService client with the connection
//
// client.ping(function(err, response) {
//   console.log('ping()');
// });

// work = new ttypes.Work();
// work.op = ttypes.Operation.DIVIDE;
// work.num1 = 1;
// work.num2 = 0;
//
// client.calculate(1, work, function(err, message) {
//   if (err) {
//     console.log("InvalidOperation " + err);
//   } else {
//     console.log('Whoa? You know how to divide by zero?');
//   }
// });

// work.op = ttypes.Operation.SUBTRACT;
// work.num1 = 15;
// work.num2 = 10;
//
// client.calculate(1, work, function(err, message) {
//   console.log('15-10=' + message);
//
//   client.getStruct(1, function(err, message){
//     console.log('Check log: ' + message.value);
//
//     //close the connection once we're done
//     connection.end();
//   });
// });