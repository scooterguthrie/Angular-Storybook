import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
    title: 'Atoms/Buttons',
    component: ButtonComponent,
} as Meta;

const Template: Story = (args) => ({
    props: args,
});

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
    label: 'Button',
    type: 'button',
    rank: 'primary',
    outline: false,
}

Secondary.args = {
    label: 'Button',
    type: 'button',
    rank: 'secondary',
    outline: false,
}