'use client'

import { useChatbotActions, useChatbotType, useIsChatbotOpen } from '@/stores/chatbotStore'
import styles from './ChatBot.module.scss'

import ChatList from '../ChatList'
import ChatRoom from '../ChatRoom'
import { useEffect, useRef } from 'react'
import ChatBotHeader from '../ChatBotHeader'

function ChatBot() {
  const isChatbotOpen = useIsChatbotOpen()
  const chatBotType = useChatbotType()
  const chatbotRef = useRef<HTMLDivElement>(null)
  const { setIsChatbotOpen } = useChatbotActions()

  const autoCloseChatbot = (e: MouseEvent) => {
    const chatbot = chatbotRef.current
    const target = e.target as HTMLElement
    if (!chatbot) return
    if (!chatbot.contains(target)) {
      setIsChatbotOpen(false)
    }
  }

  useEffect(() => {
    if (isChatbotOpen) {
      window.addEventListener('mousedown', autoCloseChatbot)
      return () => window.removeEventListener('mousedown', autoCloseChatbot)
    }
  }, [isChatbotOpen])

  return (
    isChatbotOpen && (
      <div className={styles.container} ref={chatbotRef}>
        <div className={styles.inner}>
          <ChatBotHeader />
          <div className={styles.content}>{chatBotType === 'main' ? <ChatList /> : <ChatRoom />}</div>
        </div>
      </div>
    )
  )
}

export default ChatBot
