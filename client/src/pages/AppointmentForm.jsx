import React, { useEffect } from 'react'

export default function AppointmentForm() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [])

  return (
    <div data-tf-live="01HSPYTGXBPEFMQ427ST5AD97Q"></div>
  )
}
