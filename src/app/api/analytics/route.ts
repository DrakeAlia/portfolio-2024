import { NextRequest, NextResponse } from 'next/server';

// This endpoint receives Web Vitals and other analytics data
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, value, rating, id } = body;

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', {
        name,
        value,
        rating,
        id,
        timestamp: new Date().toISOString(),
      });
    }

    // In production, send to your analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (process.env.NEXT_PUBLIC_GA_ID) {
        // You can use the Measurement Protocol API
        // or any other analytics service

        // Example structure for different services:
        // await sendToGoogleAnalytics(body);
        // await sendToVercelAnalytics(body);
        // await sendToCustomAnalytics(body);
      }

      // Store in database (optional)
      // await storeMetric({
      //   metric_name: name,
      //   value,
      //   rating,
      //   metric_id: id,
      //   timestamp: new Date(),
      //   user_agent: request.headers.get('user-agent'),
      // });
    }

    return NextResponse.json({
      success: true,
      message: 'Analytics data received'
    }, {
      status: 200
    });
  } catch (error) {
    console.error('Analytics endpoint error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process analytics' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve analytics
export async function GET(request: NextRequest) {
  // This could return aggregated metrics for a dashboard
  return NextResponse.json({
    message: 'Analytics endpoint',
    endpoints: {
      POST: 'Send Web Vitals and analytics data',
    }
  });
}
