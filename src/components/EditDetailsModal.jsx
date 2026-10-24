import React, { useState } from 'react';
import { X, Camera, Clock, MapPin, Phone, Check, RefreshCw, Sparkles } from 'lucide-react';

export default function EditDetailsModal({ isOpen, onClose, details, onSave }) {
  const [formData, setFormData] = useState({ ...details });
  const [photoPreview, setPhotoPreview] = useState(details.babyPhoto);

  if (!isOpen) return null;

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
        setFormData((prev) => ({ ...prev, babyPhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    const defaultPhoto = '/assets/baby_mishti.jpg';
    setPhotoPreview(defaultPhoto);
    setFormData((prev) => ({ ...prev, babyPhoto: defaultPhoto }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#FFFDF8] to-[#FFF0F5] rounded-3xl shadow-2xl border-4 border-pink-200 p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
          title="बंद करें"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> निमंत्रण विवरण सम्पादित करें
          </div>
          <h2 className="font-rozha text-2xl text-[#BE185D]">
            विवरण बदलें (Edit Details)
          </h2>
          <p className="font-baloo text-xs text-stone-600 mt-1">
            यहाँ से आप मिष्टी की असली फोटो, समय, पता व व्हाट्सएप नंबर बदल सकते हैं।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Baby Photo Upload */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-xs">
            <label className="block font-baloo font-bold text-sm text-pink-900 mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-pink-500" />
              नन्ही मिष्टी की असली फोटो अपलोड करें:
            </label>
            <div className="flex items-center gap-4">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover border-2 border-pink-400 shadow-sm"
              />
              <div className="flex-1 space-y-1.5">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="block w-full text-xs text-stone-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-pink-500 file:text-white hover:file:bg-pink-600 cursor-pointer"
                />
                <button
                  type="button"
                  onClick={handleResetPhoto}
                  className="text-[11px] text-pink-600 hover:underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> डिफ़ॉल्ट सुंदर फोटो पर वापस जाएँ
                </button>
              </div>
            </div>
          </div>

          {/* Event Time */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-xs">
            <label className="block font-baloo font-bold text-sm text-pink-900 mb-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-pink-500" />
              कार्यक्रम का समय (Event Time):
            </label>
            <input
              type="text"
              value={formData.eventTime}
              onChange={(e) => setFormData({ ...formData, eventTime: e.target.value })}
              placeholder="जैसे: शाम 6:00 बजे से (6:00 PM Onwards)"
              className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm font-baloo text-stone-800 bg-pink-50/30"
            />
          </div>

          {/* Event Venue */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-xs">
            <label className="block font-baloo font-bold text-sm text-pink-900 mb-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-pink-500" />
              कार्यक्रम का स्थान (Venue / Address):
            </label>
            <textarea
              rows={2}
              value={formData.venueAddress}
              onChange={(e) => setFormData({ ...formData, venueAddress: e.target.value })}
              placeholder="जैसे: निवास स्थान: श्री गणेश कृपा, शिवाजी नगर, पुणे"
              className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm font-baloo text-stone-800 bg-pink-50/30 resize-none"
            />
          </div>

          {/* WhatsApp RSVP Number */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-xs">
            <label className="block font-baloo font-bold text-sm text-pink-900 mb-1 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-pink-500" />
              व्हाट्सएप नंबर (WhatsApp Number with Country Code):
            </label>
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="जैसे: 919876543210 (Country code सहित)"
              className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm font-baloo text-stone-800 bg-pink-50/30"
            />
            <p className="text-[11px] text-stone-500 mt-1">
              * इस नंबर पर अतिथि “हाँ, हम ज़रूर आएँगे” का सीधा संदेश भेज सकेंगे।
            </p>
          </div>

          {/* Family Host Names */}
          <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-xs">
            <label className="block font-baloo font-bold text-sm text-pink-900 mb-1 flex items-center gap-1.5">
              <span>👨‍👩‍👧</span>
              निमंत्रक परिवार (Family / Hosts):
            </label>
            <input
              type="text"
              value={formData.hostFamily}
              onChange={(e) => setFormData({ ...formData, hostFamily: e.target.value })}
              placeholder="जैसे: समस्त परिवार एवं स्नेहीजन"
              className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm font-baloo text-stone-800 bg-pink-50/30"
            />
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-baloo font-bold shadow-md transition-all active:scale-95"
            >
              <Check className="w-4 h-4" />
              विवरण सहेजें (Save Changes)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-baloo font-medium transition-all"
            >
              रद्द करें
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
