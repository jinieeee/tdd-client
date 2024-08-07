import {Meta} from "@storybook/react";
import {Divider} from "../components/atoms/divider";

const meta:Meta<typeof Divider> = {
    title: 'Components/Divider',
    component: Divider,
};

export default meta;

export const lineBold = (props) => {
    return <Divider {...props} variant="lineBold">Line Bold</Divider>
}

export const lineThin = (props) => {
    return <Divider {...props} variant="lineThin">Line Thin</Divider>
}
