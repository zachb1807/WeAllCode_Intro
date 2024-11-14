'use server'
import React from 'react';
import SpecialKeyContent from './content';


interface SpecialKeyProps {
  params: Promise<{ key_name: string }>;
}

export default async function SpecialKey({ params }: SpecialKeyProps) {
  const key_name = (await params).key_name
  var friendlyName = ""
  var requiresShift = false
  var symbols = []
  var nextItem = ""


  switch (key_name) {
    case 'period':
      friendlyName = "periods"
      requiresShift = false
      symbols = ["."]
      nextItem = "comma"
      break;
    case 'comma':
      friendlyName = "commas"
      requiresShift = false
      symbols = [","]
      nextItem = "parentheses"
      break;
    case 'parentheses':
      friendlyName = "parentheses"
      symbols = ["(", ")"]
      requiresShift = true
      nextItem = "quotes"
      break;
    case 'quotes':
      friendlyName = "quotes"
      requiresShift = true
      symbols = ['"']
      nextItem = "angle_brackets"
      break;
    case 'angle_brackets':
      friendlyName = "angle brackets"
      requiresShift = true
      symbols = ["<", ">"]
      nextItem = "curly_braces"
      break;
    case 'curly_braces':
      friendlyName = "curly braces"
      requiresShift = true
      symbols = ["{", "}"]
      nextItem = "hashtag"
      break;
    case 'hashtag':
      friendlyName = "hashtags"
      requiresShift = true
      symbols = ["#"]
      nextItem = "done"
      break;
    default:
      return (
        <div>
          <p>Invalid Key: {key_name}</p>
        </div>
      )
  }

  return (
    <SpecialKeyContent keyName={key_name} friendlyName={friendlyName} requiresShift={requiresShift} nextItem={nextItem} symbols={symbols}/>
  );
};