import React, {Component} from 'react';
import LeftPanel from "./js/components/LeftPanel";
import RightPanel from "./js/components/RightPanel";

export default class App extends Component {
    render() {
        return (
            <div>
                <LeftPanel questions={[]} options={[]}/>
                <RightPanel questionDescription={"this is the question"} options={[{string: "answer1", number: 1}]}/>
            </div>
        )
            ;
    }
}
