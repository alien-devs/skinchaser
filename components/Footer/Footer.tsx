import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="cont">
        <div className="footer_top">
          {' '}
          <a href="/" className="footer_link">
            Правообладателям
          </a>
          <a href="/" className="footer_link">
            Пользовательское соглашение
          </a>
          <a href="/" className="footer_link">
            Справка
          </a>
          <a href="/" className="footer_link">
            Подписаться
          </a>
          <span>
            © 2021 ООО{' '}
            <a href="/" className="footer_link">
              «Яндекс.Медиасервисы»
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
