// KnowledgeQA.jsx - 知识问答页面组件
// 实现与RAG API的流式多轮对话功能

import { useState, useRef, useEffect } from 'react';

function KnowledgeQA() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // 滚动到底部
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 流式更新时实时滚动到底部
  const scrollToBottomInstant = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // 发送消息到RAG API
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    // 添加用户消息
    const userMessage = { role: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // 调用流式API
      const response = await fetch('http://localhost:8006/stream_chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { type: 'text', content: message }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 处理流式响应
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botResponse = '';

      // 添加机器人消息占位符
      setMessages(prev => [...prev, { role: 'bot', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botResponse += chunk;

        // 更新最新的机器人消息
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: 'bot',
            content: botResponse
          };
          return newMessages;
        });

        // 实时滚动到底部
        scrollToBottomInstant();
      }

    } catch (err) {
      console.error('API请求失败:', err);
      setError('请求失败，请确保RAG服务正在运行');
      // 添加错误消息
      setMessages(prev => [...prev, {
        role: 'bot',
        content: `抱歉，出现错误：${err.message}`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // 清空对话
  const clearChat = () => {
    setMessages([]);
    setError(null);
  };

  // 重置对话历史（调用API）
  const resetConversation = async () => {
    try {
      await fetch('http://localhost:8006/smart_reset_chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      clearChat();
    } catch (err) {
      console.error('重置对话失败:', err);
      setError('重置对话失败');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
    }
  };

  return (
    <div className="knowledge-qa">
      <div className="chat-header">
        <h2>知识问答</h2>
        <div className="chat-controls">
          <button
            onClick={clearChat}
            disabled={messages.length === 0}
            className="btn btn-secondary"
          >
            清空对话
          </button>
          <button
            onClick={resetConversation}
            disabled={messages.length === 0}
            className="btn btn-secondary"
          >
            重置对话
          </button>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="chat-container">
        <div className="chat-messages" ref={chatContainerRef}>
          {messages.length === 0 ? (
            <div className="welcome-message">
              <p>欢迎使用知识问答系统！</p>
              <p>您可以问我任何问题，我会基于知识库为您提供答案。</p>
              <p>示例问题：</p>
              <ul>
                <li>什么是机器学习？</li>
                <li>如何理解深度学习？</li>
                <li>Transformer模型的工作原理是什么？</li>
              </ul>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role}`}
              >
                <div className="message-content">
                  {msg.content}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="message bot">
              <div className="typing-indicator">
                <span>AI正在思考...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="chat-input-form">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="输入您的问题..."
            disabled={isLoading}
            rows="3"
          />
          <div className="input-controls">
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="btn btn-primary"
            >
              {isLoading ? '发送中...' : '发送'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default KnowledgeQA;