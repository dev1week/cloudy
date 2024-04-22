import type { Meta, StoryObj } from '@storybook/react'
import LearningSearchListItem from './'
import { fn } from '@storybook/test'

const meta = {
  title: 'learning/LearningSearchListItem',
  component: LearningSearchListItem,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof LearningSearchListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Item: Story = {}