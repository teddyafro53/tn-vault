import { useEffect } from "react";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Loader2, Lock, Cloud, Zap } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();
  const { user, loading } = useSupabaseAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            TN Vault
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/signin")}
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Secure Digital <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Vault</span>
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Store, organize, and access your important images and documents from anywhere. Military-grade encryption keeps your files safe.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Create Account
              </Button>
              <Button
                onClick={() => navigate("/signin")}
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
              >
                Sign In
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-4">
            {[
              {
                icon: Lock,
                title: "End-to-End Encrypted",
                description: "Your files are encrypted and only you have access",
              },
              {
                icon: Cloud,
                title: "Cloud Storage",
                description: "Access your files from any device, anywhere",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant uploads and downloads with optimized performance",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl p-6 rounded-lg hover:border-blue-700/50 transition-colors group"
              >
                <div className="flex gap-4">
                  <feature.icon className="h-6 w-6 text-blue-400 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">Why Choose TN Vault?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Secure Upload",
              description: "Drag and drop or click to upload PNG, JPG, GIF, and WebP images",
            },
            {
              title: "Organize Files",
              description: "View all your files in a beautiful gallery with metadata",
            },
            {
              title: "Easy Access",
              description: "Download or share your files anytime with one click",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-slate-700/50 backdrop-blur-xl p-8 rounded-lg hover:border-blue-700/50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 backdrop-blur-xl rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to secure your files?</h3>
          <p className="text-slate-400 mb-8">Join thousands of users protecting their important documents</p>
          <Button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-500">
          <p>&copy; 2026 TN Vault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
