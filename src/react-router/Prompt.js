/*
 * @Author: your name
 * @Date: 2021-04-06 12:54:23
 * @LastEditTime: 2021-04-06 13:47:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /router/src/react-router/Prompt.js
 */
import React from 'react';
import RouterContext from './RouterContext';
import Lifecycle from './Lifecycle';

function Prompt({ when, message }) {
  return (
    <RouterContext.Consumer>
      {
        value => {
          if (!when) return null;
          return (
            <Lifecycle
              onMount={self => {
                self.release = value.history.block(message);
              }}
              onUnmount={self => self.release()}
            />
          )
        }
      }
    </RouterContext.Consumer> 
  )
}
export default Prompt;