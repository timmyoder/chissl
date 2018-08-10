
/* 
  BSD License:
  
  CHISSL: Interactive Machine Learning
  
  Copyright © 2018, Battelle Memorial Institute
  
  All rights reserved.
  
  1. Battelle Memorial Institute (hereinafter Battelle) hereby grants permission
     to any person or entity lawfully obtaining a copy of this software and
     associated documentation files (hereinafter “the Software”) to redistribute
     and use the Software in source and binary forms, with or without 
     modification.  Such person or entity may use, copy, modify, merge, publish,
     distribute, sublicense, and/or sell copies of the Software, and may permit
     others to do so, subject to the following conditions:
     * Redistributions of source code must retain the above copyright notice,
       this list of conditions and the following disclaimers.
     * Redistributions in binary form must reproduce the above copyright notice,
       this list of conditions and the following disclaimer in the documentation
       and/or other materials provided with the distribution.
     * Other than as used herein, neither the name Battelle Memorial Institute
       or Battelle may be used in any form whatsoever without the express
       written consent of Battelle. 
  
  2. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
     AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
     THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
     PURPOSEARE DISCLAIMED. IN NO EVENT SHALL BATTELLE OR CONTRIBUTORS BE LIABLE
     FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
     DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
     CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
     LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
     OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
     DAMAGE.
     
*/

import React from 'react'

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
}  from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

class Accordion extends React.Component {
  state = {
    expanded: 0
  }

  handleChange = panel => () => {
    console.log(panel, 'clicked')
    const {expanded} = this.state;
    this.setState({
      expanded: expanded === panel ? null : panel
    });
  };

  render() {
    const { children, align='left', ...props } = this.props;
    const { expanded } = this.state;

    return (
      <div {...props}>
        { React.Children.map(children, (child, i) =>
            <ExpansionPanel
              key={i}
              expanded={expanded === i}
              onChange={this.handleChange(i)}
            >
              <ExpansionPanelSummary
                key='heading'
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography style={{width: '100%'}} align={align} type='title'>
                  { child.props.heading }
                </Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails key='details'>
                { child }
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        }
      </div>
    );
  }
}

export default Accordion;