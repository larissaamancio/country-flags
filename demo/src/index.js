import React from 'react'
import {render} from 'react-dom'
import '../../css/demo.css';
import '../../css/country-flags.css';
import 'highlight.js/styles/default.css';

import ReactFlagsSelect from '../../src'

let Highlight = require('react-syntax-highlight');

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <span className="title">Country Flags Select</span>
        </div>
        <div className="main">
          <p className="info">A customizable svg flags select components for React Js.</p>
          <div className="section-header">
            <span>Examples</span> 
          </div>
          <hr />
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Default</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect />'} />
            </div>
            <CountryFlagsSelect />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Default Country</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n defaultCountry="US" />'} />
            </div>
            <CountryFlagsSelect
              defaultCountry="US" />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Searchable</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n searchable={true} />'} />
            </div>
            <CountryFlagsSelect
            searchable={true} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Countries</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT", "NG"]} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT", "NG"]} />
          </div>

          <div className="demo-group">
            <div className="demo-group-title">
              <span>Countries (BlackList)</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT", "NG"]} \n blackList={true} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT", "NG"]}
              blackList={true} />
          </div>

          <div className="demo-group">
            <div className="demo-group-title">
              <span>Custom Labels</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Placeholder</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} \n placeholder="Select Language" />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
              placeholder="Select Language" />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Show Selected Label</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} \n placeholder="Select Language" \n showSelectedLabel={false} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
              placeholder="Select Language"
              showSelectedLabel={false} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Show Option Label</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} \n placeholder="Select Language" \n showSelectedLabel={false} \n showOptionLabel={false} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
              placeholder="Select Language"
              showSelectedLabel={false}
              showOptionLabel={false} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Selected Size</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} \n placeholder="Select Language" \n showSelectedLabel={false} \n showOptionLabel={false} \n selectedSize={14} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
              placeholder="Select Language"
              showSelectedLabel={false}
              showOptionLabel={false}
              selectedSize={14} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Options Size</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n countries={["US", "GB", "FR", "DE", "IT"]} \n customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}} \n placeholder="Select Language" \n showSelectedLabel={false} \n showOptionLabel={false} \n selectedSize={14} \n optionsSize={14} />'} />
            </div>
            <CountryFlagsSelect
              countries={["US", "GB", "FR", "DE", "IT"]} 
              customLabels={{"US": "EN-US","GB": "EN-GB","FR": "FR","DE": "DE","IT": "IT"}}
              placeholder="Select Language"
              showSelectedLabel={false}
              showOptionLabel={false}
              selectedSize={14}
              optionsSize={14} />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>className</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n className="menu-flags" />'} />
            </div>
            <CountryFlagsSelect
              className="menu-flags" />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Align Options</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n alignOptions="left" />'} />
            </div>
            <CountryFlagsSelect
              alignOptions="left" />
          </div>
          <div className="demo-group">
            <div className="demo-group-title">
              <span>Disabled</span>
            </div>
            <div className="demo-source">
              <Highlight lang={'js'} value={'<CountryFlagsSelect \n defaultCountry="US" \n showSelectedLabel={false} \n disabled={true}/>'} />
            </div>
            <CountryFlagsSelect
              defaultCountry="US"
              showSelectedLabel={false}
              disabled={true} />
          </div>
        </div>
      </div>
    )
  }
}



render(<Demo/>, document.querySelector('#demo'))
