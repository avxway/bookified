"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import LoadingOverlay from './LoadingOverlay'
import FileUploader from './FileUploader'
import VoiceSelector from './VoiceSelector'
import { DEFAULT_VOICE } from '@/lib/constants'

const formSchema = z.object({
  pdfFile: z.any().refine((file) => file instanceof File, "PDF file is required"),
  coverImage: z.any().optional(),
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author name is required"),
  voice: z.string().min(1, "Please choose a voice"),
})

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      voice: DEFAULT_VOICE,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log(values);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSubmitting(false);
  }

  return (
    <div className="new-book-wrapper">
      {isSubmitting && <LoadingOverlay />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* PDF Upload */}
          <FormField
            control={form.control}
            name="pdfFile"
            render={({ field }) => (
              <FileUploader
                type="pdf"
                label="Book PDF File"
                hint="PDF file (max 50MB)"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {/* Cover Image Upload */}
          <FormField
            control={form.control}
            name="coverImage"
            render={({ field }) => (
              <FileUploader
                type="image"
                label="Cover Image (Optional)"
                hint="Leave empty to auto-generate from PDF"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {/* Title Input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Title</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Rich Dad Poor Dad" className="form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Author Input */}
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Author Name</FormLabel>
                <FormControl>
                  <Input placeholder="ex: Robert Kiyosaki" className="form-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Voice Selector */}
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <VoiceSelector
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="form-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Begin Synthesis"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UploadForm
