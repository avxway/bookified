"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { voiceOptions, voiceCategories } from '@/lib/constants'

interface VoiceSelectorProps {
  value: string
  onChange: (value: string) => void
}

const VoiceSelector = ({ value, onChange }: VoiceSelectorProps) => {
  return (
    <FormItem className="space-y-4">
      <FormLabel className="form-label">Choose Assistant Voice</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={onChange}
          defaultValue={value}
          className="flex flex-col gap-6"
        >
          {/* Male Voices */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">Male Voices</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {voiceCategories.male.map((voiceKey) => {
                const voice = voiceOptions[voiceKey as keyof typeof voiceOptions]
                const isSelected = value === voiceKey
                return (
                  <div key={voiceKey} className="relative">
                    <RadioGroupItem
                      value={voiceKey}
                      id={voiceKey}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={voiceKey}
                      className={cn(
                        "voice-selector-option voice-selector-option-default",
                        isSelected && "voice-selector-option-selected"
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                           <div className={cn(
                               "w-4 h-4 rounded-full border border-[#8B7355] flex items-center justify-center",
                               isSelected && "bg-[#663820] border-[#663820]"
                           )}>
                               {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                           </div>
                           <span className="font-bold text-[#212a3b]">{voice.name}</span>
                        </div>
                        <p className="text-xs text-[#3d485e] mt-1 leading-relaxed">
                          {voice.description}
                        </p>
                      </div>
                    </label>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Female Voices */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">Female Voices</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {voiceCategories.female.map((voiceKey) => {
                const voice = voiceOptions[voiceKey as keyof typeof voiceOptions]
                const isSelected = value === voiceKey
                return (
                  <div key={voiceKey} className="relative">
                    <RadioGroupItem
                      value={voiceKey}
                      id={voiceKey}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={voiceKey}
                      className={cn(
                        "voice-selector-option voice-selector-option-default",
                        isSelected && "voice-selector-option-selected"
                      )}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                           <div className={cn(
                               "w-4 h-4 rounded-full border border-[#8B7355] flex items-center justify-center",
                               isSelected && "bg-[#663820] border-[#663820]"
                           )}>
                               {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                           </div>
                           <span className="font-bold text-[#212a3b]">{voice.name}</span>
                        </div>
                        <p className="text-xs text-[#3d485e] mt-1 leading-relaxed">
                          {voice.description}
                        </p>
                      </div>
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default VoiceSelector
