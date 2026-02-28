"use client"

import React, { useState } from 'react'
import { Upload, Image as ImageIcon, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { MAX_FILE_SIZE, ACCEPTED_PDF_TYPES } from '@/lib/constants'

interface FileUploaderProps {
  type: 'pdf' | 'image'
  label: string
  hint?: string
  accept?: string
  value?: File
  onChange: (file: File | undefined) => void
}

const FileUploader = ({ type, label, hint, accept, value, onChange }: FileUploaderProps) => {
  const [fileName, setFileName] = useState<string | null>(value?.name || null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (type === 'pdf') {
        if (file.size > MAX_FILE_SIZE) {
          alert("File size exceeds 50MB")
          return
        }
        if (!ACCEPTED_PDF_TYPES.includes(file.type)) {
          alert("Please upload a PDF file")
          return
        }
      }
      setFileName(file.name)
      onChange(file)
    }
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    setFileName(null)
    onChange(undefined)
  }

  const Icon = type === 'pdf' ? Upload : ImageIcon

  return (
    <FormItem>
      <FormLabel className="form-label">{label}</FormLabel>
      <FormControl>
        <div className={cn("upload-dropzone relative", fileName && "upload-dropzone-uploaded")}>
          <input
            type="file"
            accept={accept || (type === 'pdf' ? ".pdf" : "image/*")}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleUpload}
          />
          {!fileName ? (
            <>
              <Icon className="upload-dropzone-icon" />
              <p className="upload-dropzone-text">Click to upload {type === 'pdf' ? 'PDF' : 'cover image'}</p>
              {hint && <p className="upload-dropzone-hint">{hint}</p>}
            </>
          ) : (
            <div className="flex flex-col items-center">
              <p className="upload-dropzone-text truncate max-w-[400px]">{fileName}</p>
              <button
                type="button"
                onClick={handleRemove}
                className="upload-dropzone-remove mt-2"
              >
                <X className="w-5 h-5" />
                <span className="ml-1 text-sm">Remove</span>
              </button>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FileUploader
