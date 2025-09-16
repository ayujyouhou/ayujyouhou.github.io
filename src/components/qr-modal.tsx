'use client';

import React, { useState, useEffect } from 'react';
import { QrCode, X, Copy, Share2, Check, AlertCircle } from 'lucide-react';
import QRCode from 'react-qr-code';
import { motion, AnimatePresence } from 'framer-motion';

interface QRModalProps {
  url?: string;
  title?: string;
}

export function QRModal({ url = 'https://ayujyouhou.github.io', title = 'Ayu Portfolio' }: QRModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [shareStatus, setShareStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setCanShare(typeof navigator !== 'undefined' && !!navigator.share);
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareUrl = async () => {
    if (isSharing) return; // 連続クリック防止
    
    if (canShare) {
      setIsSharing(true);
      setShareStatus('idle');
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        setShareStatus('success');
        setTimeout(() => setShareStatus('idle'), 2000);
      } catch (err) {
        // AbortError (ユーザーがキャンセル) は通常の動作なので、エラーメッセージを表示しない
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            // キャンセルされた場合は何もしない
            setShareStatus('idle');
          } else {
            console.error('Failed to share:', err);
            setShareStatus('error');
            setTimeout(() => setShareStatus('idle'), 3000);
          }
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      // Fallback to copy
      copyToClipboard();
    }
  };

  return (
    <>
      {/* QRコードボタン */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
      >
        <QrCode className="w-5 h-5" />
        <span className="text-sm font-medium">QRコード</span>
      </button>

      {/* モーダル */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
              onClick={() => setIsOpen(false)}
            />

            {/* モーダル本体 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 max-w-sm w-full mx-auto">
                {/* ヘッダー */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    QRコード
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* QRコード */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-xl shadow-inner">
                    <QRCode
                      value={url}
                      size={200}
                      level="M"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* URL表示 */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center break-all">
                    {url}
                  </p>
                </div>

                {/* アクションボタン */}
                <div className="flex gap-3">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium text-sm"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied ? 'コピー済み!' : 'URLをコピー'}
                  </button>
                  
                  {canShare && (
                    <button
                      onClick={shareUrl}
                      disabled={isSharing}
                      className={`flex-1 flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                        shareStatus === 'success' ? 'bg-green-500 text-white' :
                        shareStatus === 'error' ? 'bg-red-500 text-white' :
                        'bg-green-500 hover:bg-green-600 text-white'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {isSharing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          共有中...
                        </>
                      ) : shareStatus === 'success' ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          共有しました
                        </>
                      ) : shareStatus === 'error' ? (
                        <>
                          <AlertCircle className="w-4 h-4 mr-2" />
                          エラー
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 mr-2" />
                          共有
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* 説明文 */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                  QRコードをスマートフォンで読み取ってアクセスできます
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}